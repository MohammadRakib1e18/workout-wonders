import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import SideBar from '../SideBarContainer/SideBar';
import './AllExercises.css';

const AllExercises = () => {
    const [loadedData, setLoadedData] = useState([]);
    const [exerciseDuration, setExerciseDuration] = useState(0);


    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setLoadedData(data));
    },[])

    const addToCart = (duration) => {
        setExerciseDuration(exerciseDuration+duration);
    }

    return (
        <div className='main-container'>
            <section className='exercise-container'>
                {
                    loadedData.map(data => <Exercise data={data} addToCart={addToCart} key={data.index}></Exercise>)
                }
            </section>
            <section className='cart-container'>
                <SideBar duration={exerciseDuration}></SideBar>
            </section>
        </div>
    );
};

export default AllExercises;