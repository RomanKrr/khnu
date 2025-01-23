import React from 'react'
import { RxCross2 } from "react-icons/rx";
import '../Message/Message.css';

const Message = () => {
    return (
        <div className='message'>
            <div className="message_container">
                <p className="subjectName">
                    Англійська мова
                </p>
                <h3 className="message_text">
                    Нова оцінка: 2
                </h3>
                <RxCross2 className='cross'/>
                <p className="date">
                    17.01.2024
                </p>
            </div>
        </div>
    )
}

export default Message