import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><NavLink to="/category/DataStructures" activeClassName="active-link">자료구조</NavLink></li>
        <li><NavLink to="/category/DB" activeClassName="active-link">데이터베이스</NavLink></li>
        <li><NavLink to="/category/Algorithms" activeClassName="active-link">알고리즘</NavLink></li>
        <li><NavLink to="/category/Networking" activeClassName="active-link">네트워크</NavLink></li>
        <li><NavLink to="/category/OperatingSystems" activeClassName="active-link">운영체제</NavLink></li>
        <li><NavLink to="/category/OOP" activeClassName="active-link">객체지향</NavLink></li>
        <li><NavLink to="/category/SoftwareEngineering" activeClassName="active-link">SW Test</NavLink></li>
        <li><NavLink to="/category/Web" activeClassName="active-link">웹</NavLink></li>
        <li><NavLink to="/category/RandomQuestionsDefense" activeClassName="active-link">랜덤 디펜스!</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
