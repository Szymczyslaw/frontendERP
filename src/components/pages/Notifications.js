import React from 'react';
import '../styles/RightSidebar.css';
import '../styles/containers/Container.css'
import {Link} from "react-router-dom";

const Notifications = () => {
    return (
        <div className="container right-sidebar">
            <div className="title">
                Notifications
            </div>
            <div className="list-group">
                <Link to href="#" className="list-group-item list-group-item-action">Widget 1</Link>
            </div>
        </div>
    );
};

export default Notifications;