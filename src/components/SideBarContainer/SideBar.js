import React, { useState } from 'react';
import './SideBar.css';
import { getFromLocalStorage, sendToLocalStorage } from '../../utilities/localStorage';
import Swal from 'sweetalert2';
import userLogo from '../../Images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLocation, faLocationPin } from '@fortawesome/free-solid-svg-icons';

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
      <div class="side-bar">
        <section class="user-profile">
          <img src={userLogo} alt="" />
          <div>
            <h3>Mohammad Rakib</h3>
            <p>
              <FontAwesomeIcon icon={faLocationPin} />{" "}
               Gazipur, Bangladesh
            </p>
          </div>
        </section>
        <section class="profile-details">
            <span>Weight: 68kg</span>
            <span>Height: 5.10F</span>
            <span>Age : 26y</span>
        </section>
        <section className="add-break">
          <h2 className="heading">Add A Break</h2>
          <ul className="break-options">
            <li
              onClick={() => {
                breakHandler(10);
              }}
            >
              10s
            </li>
            <li
              onClick={() => {
                breakHandler(20);
              }}
            >
              20s
            </li>
            <li
              onClick={() => {
                breakHandler(30);
              }}
            >
              30s
            </li>
            <li
              onClick={() => {
                breakHandler(40);
              }}
            >
              40s
            </li>
            <li
              onClick={() => {
                breakHandler(50);
              }}
            >
              50s
            </li>
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