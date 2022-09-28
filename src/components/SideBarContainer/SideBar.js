import React, { useState } from 'react';
import './SideBar.css';

const SideBar = ({duration}) => {
    const [breakTime, setBreakTime] = useState(0);

    const breakHandler = (time) => {
        setBreakTime(time);
    }
    return (
      <div>
        <section class="add-break">
          <h2 class="heading">Add A Break</h2>
          <ul className="break-options">
            <li onClick={() => {breakHandler(10)}}>10s</li>
            <li onClick={() => {breakHandler(20)}}>20s</li>
            <li onClick={() => {breakHandler(30)}}>30s</li>
            <li onClick={() => {breakHandler(40)}}>40s</li>
            <li onClick={() => {breakHandler(50)}}>50s</li>
          </ul>
        </section>
        <section className="exercise-details">
          <h2 className="heading">Exercise Details</h2>
          <h4 className="duration">
            <span>Exercise time</span>
            <span className="gray">{duration} seconds</span>
          </h4>
          <h4 className="duration">
            <span>Break time</span>
            <span className="gray">{breakTime} seconds</span>
          </h4>
        </section>
      </div>
    );
};

export default SideBar;