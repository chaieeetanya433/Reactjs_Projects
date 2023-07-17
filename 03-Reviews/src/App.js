import React from 'react';
import Review from './Review';
// import { FaGithubSquare } from 'react-icons/fa';

function App() {
  return (
    // <h2>
    // Reviews project setup 
    // {/* <FaGithubSquare className='icon'/> */}

    // </h2>
    <main> 
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review/>
      </section>
    </main>
    );
};


export default App;
