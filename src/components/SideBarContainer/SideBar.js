import React, { useState } from 'react';
import './SideBar.css';
import { getFromLocalStorage, sendToLocalStorage } from '../../utilities/localStorage';
import Swal from 'sweetalert2';

const SideBar = ({duration}) => {
    const [breakTime, setBreakTime] = useState(getFromLocalStorage());

    const breakHandler = (time) => {
        setBreakTime(time);
        sendToLocalStorage(time);
    }
    const displayToast = () => {
        Swal.fire({
          icon: "success",
          title: "Activity Completed Successfully!",
          showConfirmButton: true,
        });
    }
    return (
      <div>
        <section className="add-break">
          <h2 className="heading">Add A Break</h2>
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
        <section class="activity-completed" onClick={displayToast}>
            <h1>Activity Completed</h1>
        </section>
      </div>
    );
};

export default SideBar;