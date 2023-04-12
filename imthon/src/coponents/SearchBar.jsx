import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from "react-icons/fa";

import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';
import { SlFolder } from 'react-icons/sl';
import { MdOutlineListAlt } from 'react-icons/md';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { CiMusicNote1 } from 'react-icons/ci';
import { CgGames } from 'react-icons/cg';
import { MdOutlineExpandMore } from 'react-icons/md';

import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuitem = [
    {
      path: "/",
      name: "Home",
      icon: <BsHouseDoor className='me-2' />
    },
    {
      path: "/Trending",
      name: "Trending",
      icon: <AiOutlineFire className='me-2' />

    },
    {
      path: "/Subscriptions",
      name: "Subscriptions",
      icon: <BsFiles className='me-2' />
    },
  ]
  const menuItem = [
    {
      path: "/Library",
      name: "Library",
      icon: <SlFolder className='me-2' />
    },
    {
      path: "/History",
      name: "History",
      icon: <MdOutlineListAlt className='me-2' />
    },
    {
      path: "/Watch later",
      name: "Watch later",
      icon: <BsAlarm className='me-2' />
    },
    {
      path: "/Favourites",
      name: "Favourites",
      icon: <AiOutlineStar className='me-2' />
    },
    {
      path: "/Liked videos",
      name: "Liked videos",
      icon: <BsSuitHeart className='me-2' />
    },
    {
      path: "/Music",
      name: "Music",
      icon: <CiMusicNote1 className='me-2' />
    },
    {
      path: "/Games",
      name: "Games",
      icon: <CgGames className='me-2' />
    },
    {
      path: "/Show more",
      name: "Show more",
      icon: <MdOutlineExpandMore className='me-2' />
    },
  ]
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "0px" : "50px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuitem.map((item, index) => (
            <NavLink to={item.path} key={index} className="li d-flex mt-2" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "none" : "block" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
        <div className='my-5'></div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="li d-flex mb-2" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "none" : "block" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children} fahj</main>
    </div>
  );
};

export default Sidebar;