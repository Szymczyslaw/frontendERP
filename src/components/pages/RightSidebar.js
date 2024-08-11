import React from 'react';
import '../styles/RightSidebar.css';
import '../styles/containers/Container.css'
import {Link} from "react-router-dom";

const RightSidebar = () => {
    return (
        <div className="container right-sidebar">
            <div className="title">
                Reports
            </div>
            <div className="list-group">
                <Link to href="#" className="list-group-item list-group-item-action">Widget 1</Link>
                <Link to href="#" className="list-group-item list-group-item-action">Widget 2</Link>
                <Link to href="#" className="list-group-item list-group-item-action">Widget 3</Link>
                <Link to href="#" className="list-group-item list-group-item-action">Settings</Link>
                <Link to href="#" className="list-group-item list-group-item-action">Help</Link>
            </div>
        </div>
    );
};

export default RightSidebar;