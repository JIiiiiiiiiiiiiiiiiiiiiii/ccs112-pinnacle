import React, { useState } from "react"
import user from "../data/user";
import bell from "/bell.png"
import menu from "/menu.png"
import avatar from "/avatar.png"
import Sidebar from "./Sidebar"

export default function Header() {
  const [userData] = user;
  return (
    <header className="flex h-14 items-center justify-between bg-[#1B8756] p-2.5 text-white w-full">
      <div className="flex items-center d-lg-flex d-none">
        <h6 className="flex items-center space-x-3 my-0 d-lg-block pl-64" aria-label="Student information">
          <b className="text-lg font-bold">{userData.name}</b>
          <i className="text-sm text-white">Student No. {userData.studentNumber}</i>
          <span className="bg-white text-[#1B8756] px-2.5 py-1.5 rounded-md text-xs font-medium">
            {userData.status}
          </span>
        </h6>
      </div>

      <nav className="flex items-center ml-auto mr-0" aria-label="User navigation">
        <div className="dropdown">
          <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="w-4 invert" src={bell} alt="" />
          </button>
          <ul class="dropdown-menu text-sm">
            <header className="ml-1.5 mb-1">Notifications</header>
            <li><a className="dropdown-item" href="#">Notification 1</a></li>
            <li><a className="dropdown-item" href="#">Notification 2</a></li>
            <li><a className="dropdown-item" href="#">Notification 3</a></li>
            <footer className="m-1 text-center">See All Notifications</footer>
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="w-4 invert" src={menu} alt="" />
          </button>
          <ul class="dropdown-menu text-sm">
            <li><a className="dropdown-item" href="#">Academic Tracker</a></li>
            <li><a className="dropdown-item" href="#">Grades</a></li>
            <li><a className="dropdown-item" href="#">Clearance</a></li>
            <li><a className="dropdown-item" href="#">Retention History</a></li>
            <li><a className="dropdown-item" href="#">Test Result</a></li>
            <li><a className="dropdown-item" href="#">Account</a></li>
          </ul>
        </div>

        <div className="dropdown text-sm">
          <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="w-4 invert" src={avatar} alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">My Profile</a></li>
            <li><a className="dropdown-item" href="#">My Account</a></li>
            <li><a className="dropdown-item" href="#">Change Password</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}