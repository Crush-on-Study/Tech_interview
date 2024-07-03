import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <h2>Crush-on-Study</h2>
        <p></p>
      </div>
      <div className="sidebar-section">
        <h3>Introduction</h3>
        <p>개발은 취미로만 하고싶어 넘어온 QA입니다</p>
      </div>
      <div className="sidebar-section">
        <h3>Experience</h3>
        <ul>
          <li>어딘가에서 데이터분석+QA (2023.07 ~ )</li>
          <li>LG디스플레이 ESG기술 연구원 (2022.07 ~ 2022.12) </li>
          <li>Onsemi 반도체 테스트 엔지니어 (2021.10 ~ 2022.06) </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Education</h3>
        <ul>
          <li>삼성SDS SCSA 20기 (2023.01 ~ 2023.07)</li>
          <li>중앙대학교 물리학과 졸업 (2022.02)</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
