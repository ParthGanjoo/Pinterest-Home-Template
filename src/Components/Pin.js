import React from "react";
import SaveImage from '../Assets/Frame 55 (2).png'

function Pin({ pinSize, imgSrc, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>{name}</h3>
        <div className="search">
          <a href={link} target="_blank">
            <img
              src={SaveImage} width={65}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;