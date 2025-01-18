import React, { useState, useRef, useEffect } from 'react';

import main_logo from '../../assets/logo-of-khnu-variants-01_0001_sloj-1.png';
import '../Header/Header.css';

import { RxAvatar } from "react-icons/rx";
import { GoSun } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import Alert from '../Alert/Alert';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const avatarRef = useRef(null);

    const [openAlert, setOpenAlert] = useState(false);

    const { logout, authUser } = useAuthStore();

    const openDropdown = () => {
        setOpen(!open);
    }
    const handleLogoutClick = () => {
        openDropdown(); // Викликаємо функцію для відкриття/закриття dropdown
        logout(); // Викликаємо функцію для виходу з системи
    };

    useEffect(() => {
        const handleClick = (event) => {
            if (open) {
                if (dropdownRef.current && avatarRef.current && !dropdownRef.current.contains(event.target) && !avatarRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [open]);

    const handleCancel = () => {
        setOpenAlert(false);
    };
    return (
        <header>
            <div className="header_container">
                <div className="header_logo">
                    <Link to="/">
                        <img src={main_logo} alt="хну" className='main_logo' />
                    </Link>
                </div>
                <div className='header_name'>
                    <h1>ХНУ</h1>
                    <h3>електронний журнал</h3>
                </div>
                <div className="header_avatar">
                    <div ref={avatarRef}>
                        <RxAvatar className='avatar' onClick={() => openDropdown()} />
                    </div>
                    <nav className={`dropdown_container ${open ? 'open' : ''}`}>
                        <div className="dropdown_info">
                            <h3 className='student_name'>{authUser?.fullName}</h3>
                            <p className='student_number'>{authUser?.gradeBookId}</p>
                        </div>
                        <ul className="dropdown_links" ref={dropdownRef}>
                            <Link to="/studentProfile">
                                <li onClick={() => openDropdown()}>Особисті дані</li>
                            </Link>
                            <Link to="/notificationCenter">
                                <li onClick={() => openDropdown()}>Центр сповіщень <CiBellOn className='icon' /></li>
                            </Link>
                            <Link to="/individualStudyPlan">
                                <li onClick={() => openDropdown()}>Індивідуальний навч.план</li>
                            </Link>
                            <Link to="/portfolio">
                                <li onClick={() => openDropdown()}>Портфоліо</li>
                            </Link>
                            <Link to="/achievements">
                                <li onClick={() => openDropdown()}>Досягнення</li>
                            </Link>
                            <li onClick={() => openDropdown()}>Мова</li>
                            <li onClick={() => openDropdown()}>Тема <GoSun className='sun icon' /></li>
                            <li className='logOutbtn' onClick={() => setOpenAlert(!openAlert)} >Вийти з системи <IoIosLogOut className='icon' /></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="wrp">
                {openAlert && <Alert onConfirm={logout} onCancel={handleCancel} />}
            </div>
        </header>
    );
}

export default Header;