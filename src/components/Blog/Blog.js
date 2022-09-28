import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h2 className='blog-title'>Coder's Blogs House!</h2>

            <article class="blog">
                <h5 class="blog-Que">
                    1: How does react work?
                </h5>
                <p class="blog-Ans">
                    React is a new javascript library. It helps to develop website faster and efficient.
                </p>
                <p class="blog-Ans">
                    React works in his own world. Basically, it creates it's own DOMs which are called virtual 
                    DOMs. One of them is used to contain the previous rendered-info and another one is to 
                    contain the newer data. Then react compare the two DOMs and find out the changed portion in the UI.
                    At last, it updated teh browser-DOM. 
                </p>
            </article>
            <article class="blog">
                <h5 class="blog-Que">
                    2: Differences between Props and State?
                </h5>
                <p class="blog-Ans">
                    The Differences between them are listed below: 
                    <ol>
                        <li>Props are known as properties. It can be used to transfer 
                            data from one component to another. But State is used to save 
                            the interactive data of one component. 
                        </li>
                        <li>We can use props to send state but can't use state as props</li>
                        <li>state is changeable. It varies with the interaction of the users. 
                            But props can't be modified. 
                        </li>
                    </ol>
                </p>
                <p class="blog-Ans">
                    
                </p>
            </article>
            <article class="blog">
                <h5 class="blog-Que">
                    1: What are the uses of the useEffect besides fetching data?
                </h5>
                <p class="blog-Ans">
                    useEffect is a react-hook that allows to perform side effects in components. 
                    Mainly, we use it to fetch data. But it has more uses:
                    <ol>
                        <li>Directly updating the DOM. It takes two arguments. One of them
                             is dependency. We can set dependency as much as we want to render.
                        </li>
                        <li>Effect clean-up such as timeouts, event-listeners etc.</li>
                    </ol>
                </p>
            </article>
        </div>
    );
};

export default Blog;