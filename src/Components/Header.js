import React from 'react'
import '../Styles/Header.css'
import { AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import { GrPinterest } from 'react-icons/gr'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState, useEffect, useRef } from 'react';
import Logo from '../Assets/Logo (5).png'
import Img2 from '../Assets/Img2.png'
import Img3 from '../Assets/Img3.png'


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

                {/* //Change logo to either original logo or a logo with the friend's initial for personal touch */}

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
                    <img src={Img3} width={26} />
                </div>

                {isDropdownOpen && (
                    <div className='dropdown-menu'>

                        {/* // Add birthday friend's image for the account profile picture */}

                        <img src={Img2} />
                        <a href="#" target="_blank">Friend Name</a>
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