import React from "react";
import "../Navbar/Navbar.css";
import image from "../Logo/logo.png";
import searchIcon from "../Images/magnifying-glass.png";
import location from "../Images/globe.png";
import menu from "../Images/menu.png";
import profile from "../Images/profile.png";

function Navbar() {
  return (
    <nav class="navbar navbar-1 sticky-top">
      <div class="navb">
        <img className="mt-2 ms-5" src={image} alt="Logo" height="30" />

        <div className="search-div hover-effect">
          <button className="search-component">Anywhere |</button>
          <button className="search-component">Any week |</button>
          <button className="search-component light-txt">Add guests</button>
          <button className="borderRemove">
            <div className="search-btn-div ">
              <img src={searchIcon} alt="" height={20}></img>
            </div>
          </button>
        </div>

        <div className="right-content">
          <button className="borderRemove txt-btn p-0">Airbnb your home</button>
          <button className="location borderRemove p-0">
            <img className="mb-1" src={location} alt="" height={15}></img>
          </button>
          <button className="borderRemove p-0">
            <div className="profile-div hover-effect ms-2">
              <img className="mt-2" src={menu} alt="" height={20}></img>
              <img className="ms-3 mt-2" src={profile} alt="" height={30}></img>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
