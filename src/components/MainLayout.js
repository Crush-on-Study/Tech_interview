import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children, maxIds }) => {
  const totalPosts = Object.values(maxIds).reduce((sum, count) => sum + count, 0);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Sidebar />
      <div className="main-content">
        <div className="total-posts">
          <h3>Total Posts: {totalPosts}</h3>
          <ul>
            {Object.keys(maxIds).map((category) => (
              <li key={category}>{category}: {maxIds[category]} posts</li>
            ))}
          </ul>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
