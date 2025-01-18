import React from 'react'
import NotificationNav from '../components/NotificationNav/NotificationNav'
import Message from '../components/Message/Message'
import "../pageStyles/Notification.css"

const Notification = () => {
    return (
        <section className='notification-page'>
            <NotificationNav />
            <p className='delete_all'>Видалити всі</p>
            <div className="messages_container">
                <Message />
                <Message />
                <Message />
            </div>
        </section>
    )
}

export default Notification