import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children, setMaxId, maxIds }) => {
  const totalPosts = Object.values(maxIds).reduce((acc, id) => acc + id, 0);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Sidebar />
      <div className="main-content">
        <div className="total-posts">
          <h3>Total Posts: {totalPosts}</h3>
          <div>
            {Object.entries(maxIds).map(([category, count]) => (
              <div key={category}>{category}: {count}</div>
            ))}
          </div>
        </div>
        {React.cloneElement(children, { setMaxId })}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
