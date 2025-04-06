import pinnacle from '/pinnacle.png';
import pinnacle2 from '/pnc-header.png';

export default function Sidebar({ onClose, isOpen }) {
    const sidebarClasses = `col-6 col-md-3 col-xl-2 px-sm-2 px-0 fixed top-0 start-0 vh-100 bg-[#ffffff] z-40 transition-transform duration-300 ease-in-out left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`;

    const navItems = [
        { text: 'My Dashboard', icon: 'bi-house', href: '#' },
        { text: 'My Classes', icon: 'bi-journals', href: '#' },
        { text: 'My Schedule', icon: 'bi-calendar-week', href: '#' },
        { text: 'My Calendar', icon: 'bi-calendar', href: '#' },
        { text: 'My Registration Form', icon: 'bi-file-earmark-text', href: '#' },
        { text: 'My Library', icon: 'bi-book', href: '#' },
    ];

    return (
        <div className={sidebarClasses}>
            <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100 overflow-y-auto">
                <a href="#" className="d-flex justify-between items-center mb-md-0 me-md-auto text-white text-decoration-none w-full px-3 py-3">
                    <span className="d-sm-inline text-black">
                        <img className="w-28" src={pinnacle} alt="Pinnacle Logo" />
                    </span>
                    <button className="btn btn-sm d-sm-block d-lg-none" onClick={onClose}>
                        <span className="text-black" aria-hidden="true">&times;</span>
                    </button>
                </a>
                <div className="nav-lavel bg-white text-secondary text-center pb-3 d-block d-lg-none text-sm text-black w-full">
                    <img className="w-[100]" src={pinnacle2} alt="PNC Header" />
                    <br />
                    <span>
                        Learning Management System
                    </span>
                </div>
                <div className="nav-lavel bg-white text-secondary text-center pb-3 d-none d-lg-block text-sm text-black w-full">
                    <img className="w-[100]" src={pinnacle2} alt="PNC Header" />
                    <br />
                    <span>
                        Learning Management System
                    </span>
                </div>
                <div className="container-fluid nav-lavel bg-secondary text-white pl-4 py-3 mb-2">
                    <span>Second Semester</span>
                    <br />
                    <h6>A.Y. 2024-2025</h6>
                </div>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    {navItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a href={item.href} className="nav-link align-middle px-0 text-black">
                                <i className={`fs-4 bi ${item.icon}`}></i> <span className="ms-1 text-black">{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <hr />
            </div>
        </div>
    );
}