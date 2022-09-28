import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {picture, name, button, duration} = props.data;
    return (
      <div class="exercise">
        <section className="exercise-description">
          <img src={picture} alt="" />
          <h3>{name}</h3>
          <small>Duration: {duration}</small>
        </section>
        <button>{button}</button>
      </div>
    );
};

export default Exercise;