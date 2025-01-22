import React from 'react'
import '../Alert/Alert.css';

const Alert = ({ onConfirm, onCancel }) => {
  return (
    <div className="alert_wrapper">
      <div className='alert'>
        <div className="alert_container">
          <h2>Ви впевнені, що хочете вийти з акаунта?</h2>
          <div className="alert_buttons">
            <button className="yes" onClick={onConfirm} >Так</button>
            <button className="no" onClick={onCancel}>Ні</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert