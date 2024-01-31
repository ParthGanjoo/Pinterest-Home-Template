import React from 'react'
import '../Styles/Header.css'
import { AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import { GrPinterest } from 'react-icons/gr'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState, useEffect, useRef } from 'react';
import Logo from '../Assets/Logo (5).png'
import PFP from '../Assets/PFP.png'
import PFPcircle from '../Assets/Group 47.png'

function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className='Header'>
            <div className='Logo'>
                {/* <GrPinterest size="26px" /> */}
                <img src={Logo} width={26} />
            </div>

            <div className='Home'>
                Home
            </div>

            <div className='Explore'>
                Explore
            </div>

            <div className='Create'>
                Create
            </div>

            <div className='Search'>
                <div className='Searchicon'>
                    <AiOutlineSearch size="22px" />
                </div>

                <form>
                    <input
                        type="text"
                        placeholder="Search"
                    />
                    <button type="submit"></button>
                </form>
            </div>

            <div className='Bell'>
                <AiFillBell size="28px" />
            </div>


            <div className='Message'>
                <BsFillChatDotsFill size="24px" />
            </div>

            <div className='dropdown-container' ref={dropdownRef}>
                <div className='Account' onClick={handleToggleDropdown}>
                    <img src={PFPcircle} width={26} />
                </div>

                {isDropdownOpen && (
                    <div className='dropdown-menu'>
                        <img src={PFP} />
                        <a href="https://drive.google.com/drive/folders/1efGFhQ0Z7xMq9TkYfMWFKYktDzNtLnwJ?usp=drive_link" target="_blank">Khushi Khanna</a>
                    </div>
                )}
            </div>
            {/* <div className='Account'>
            <FaUserCircle size="24px"/>
        </div> */}

            <div className='Dropdown'>
                <MdKeyboardArrowDown size="26px" />
            </div>

        </div>
    )
}

export default Header