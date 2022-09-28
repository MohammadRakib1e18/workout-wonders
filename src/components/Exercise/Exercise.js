import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {picture, name, button, duration} = props.data;
    const addToCart = props.addToCart;
    return (
      <div className="exercise">
        <section className="exercise-description">
          <img src={picture} alt="" />
          <h3>{name}</h3>
          <small>Duration: {duration}s</small>
        </section>
        <button onClick={() => {addToCart(duration)}}>{button}</button>
      </div>
    );
};

export default Exercise;