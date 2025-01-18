import React from 'react';
import { Outlet } from 'react-router-dom';

const BlankLayout = () => {
    return (
        <div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default BlankLayout;