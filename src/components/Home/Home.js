import React from 'react';
import AllExercises from '../AllExercises/AllExercises';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllExercises></AllExercises>
            <Footer></Footer>
        </div>
    );
};

export default Home;