import React from 'react';
import AllExercises from '../AllExercises/AllExercises';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllExercises></AllExercises>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;