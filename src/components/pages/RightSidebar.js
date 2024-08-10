import React from 'react';
import '../styles/RightSidebar.css';

const RightSidebar = () => {
    return (
        <div className="border-right" id="sidebar-wrapper">

            <div className="right-sidebar">
                <ul>
                    <li><a href="#">Widget 1</a></li>
                    <li><a href="#">Widget 2</a></li>
                    <li><a href="#">Widget 3</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </div>

    );
};

export default RightSidebar;