import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h1>~/casperadamus/homepage</h1>
      
      <div className="divider">⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆</div>
      
      <h2>about_me.txt</h2>
      <p>Hello, my name is Casper Adamus, I'm a student at the University of Conneticuit 
        studying Computer Engineering, minoring in Mathematics.
      </p>
      
      <h2>navigation.lnk</h2>
      <ul className="link-list">
        <li><a href="/about">about</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>
      
      <div className="divider">⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆</div>
      
      <h2>status.log</h2>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>Current status: active<span className="cursor">_</span></p>
      
      </div>
  );
}

export default Home;