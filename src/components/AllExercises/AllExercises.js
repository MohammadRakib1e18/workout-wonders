import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './AllExercises.css';

const AllExercises = () => {
    const [loadedData, setLoadedData] = useState([]);


    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setLoadedData(data));
    },[])

    return (
        <div className='exercise-container'>
            {
                loadedData.map(data => <Exercise data={data} key={data.index}></Exercise>)
            }
        </div>
    );
};

export default AllExercises;