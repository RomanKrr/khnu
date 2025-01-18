import React from 'react'
import { Link } from 'react-router-dom';
import '../NotificationNav/NotificationNav.css';

const NotificationNav = () => {
    return (
        <nav className="notification_nav">
            <Link to="/notificationCenter">
                <p>Налаштування</p>
            </Link>
            <Link to="/notification">
                <p>Усі повідомлення</p>
            </Link>
        </nav>
    )
}

export default NotificationNav