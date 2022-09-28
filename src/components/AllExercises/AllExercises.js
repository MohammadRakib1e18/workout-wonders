import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import SideBar from '../SideBarContainer/SideBar';
import './AllExercises.css';

const AllExercises = () => {
    const [loadedData, setLoadedData] = useState([]);


    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setLoadedData(data));
    },[])

    return (
        <div className='main-container'>
            <section className='exercise-container'>
                {
                    loadedData.map(data => <Exercise data={data} key={data.index}></Exercise>)
                }
            </section>
            <section className='cart-container'>
                <SideBar></SideBar>
            </section>
        </div>
    );
};

export default AllExercises;