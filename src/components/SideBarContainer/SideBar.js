import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div>
            <section className="exercise-details">
                <h2 className="heading">Exercise Details</h2>
                <h4 className="duration"><span>Exercise time</span><span className="gray">{200} seconds</span></h4>

            </section>
        </div>
    );
};

export default SideBar;