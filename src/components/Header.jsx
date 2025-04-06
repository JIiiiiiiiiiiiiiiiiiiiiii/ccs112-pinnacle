import React, { useState } from "react";
import user from "../data/user";
import bell from "/bell.png";
import menu from "/menu.png";
import avatar from "/avatar.png";
import Sidebar from "./Sidebar";

function HamburgerIcon({ onClick }) {
    return (
        <button className="btn d-lg-none" onClick={onClick}>
            ☰
        </button>
    );
}

export default function Header() {
    const [userData] = user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const notificationItems = [
        { text: 'Notification 1', href: '#' },
        { text: 'Notification 2', href: '#' },
        { text: 'Notification 3', href: '#' },
    ];

    const menuItems = [
        { text: 'Academic Tracker', href: '#' },
        { text: 'Grades', href: '#' },
        { text: 'Clearance', href: '#' },
        { text: 'Retention History', href: '#' },
        { text: 'Test Result', href: '#' },
        { text: 'Account', href: '#' },
    ];

    const profileItems = [
        { text: 'My Profile', href: '#' },
        { text: 'My Account', href: '#' },
        { text: 'Change Password', href: '#' },
        { text: 'Logout', href: '#' },
    ];

    return (
        <header className="flex h-14 items-center justify-between bg-[#1B8756] p-2.5 text-white w-full fixed-top" style={{ zIndex: 4 }}>
            <div className="flex items-center">
                <HamburgerIcon onClick={toggleSidebar} />
                <div className="lg:block hidden">
                    <Sidebar onClose={() => setIsSidebarOpen(false)} isOpen={true} />
                </div>
                {isSidebarOpen && (
                    <div className="lg:hidden block fixed top-0 left-0 z-50">
                        <Sidebar onClose={toggleSidebar} isOpen={isSidebarOpen} />
                    </div>
                )}
                <div className="flex items-center d-lg-flex d-none">
                    <h6
                        className={`flex items-center space-x-3 my-0 d-lg-block pl-64`}
                        aria-label="Student information"
                    >
                        <b className="text-lg font-bold">{userData.name}</b>
                        <i className="text-sm text-white">Student No. {userData.studentNumber}</i>
                        <span className="bg-white text-[#1B8756] px-2.5 py-1.5 rounded-md text-xs font-medium">
                            {userData.status}
                        </span>
                    </h6>
                </div>
            </div>

            <nav className="flex items-center ml-auto mr-0" aria-label="User navigation">
                <div className="dropdown">
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="w-4 invert" src={bell} alt="" />
                    </button>
                    <ul className="dropdown-menu text-sm dropdown-menu-end">
                        <header className="ml-1.5 mb-1">Notifications</header>
                        {notificationItems.map((item, index) => (
                            <li key={index}><a className="dropdown-item" href={item.href}>{item.text}</a></li>
                        ))}
                        <footer className="m-1 text-center">See All Notifications</footer>
                    </ul>
                </div>

                <div className="dropdown ml-3">
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="w-4 invert" src={menu} alt="" />
                    </button>
                    <ul className="dropdown-menu text-sm dropdown-menu-end">
                        {menuItems.map((item, index) => (
                            <li key={index}><a className="dropdown-item" href={item.href}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="dropdown ml-3 text-sm">
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="w-4 invert rounded-circle" src={avatar} alt="" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {profileItems.map((item, index) => (
                            <li key={index}><a className="dropdown-item" href={item.href}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}