import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import './SubLayout.css';

const SubLayout = ({ children, maxIds, setMaxId }) => {
  const category = window.location.pathname.split('/').pop();
  const categoryCount = maxIds[category] || 0;

  return (
    <div className="SubApp">
      <Header />
      <Navigation />
      <div className="sub-content">
        <h3>{category} 글의 수: {categoryCount}</h3>
        {React.cloneElement(children, { setMaxId })}
      </div>
      <Footer />
    </div>
  );
}

export default SubLayout;
