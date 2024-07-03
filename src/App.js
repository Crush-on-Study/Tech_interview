import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DataStructures from './pages/DataStructures';
import OperatingSystems from './pages/OperatingSystems';
import Category from './pages/Category';
import MainLayout from './components/MainLayout';
import SubLayout from './components/SubLayout';
import './styles/App.css';

function App() {
  const [maxIds, setMaxIds] = useState({});

  const setMaxId = (category, maxId) => {
    setMaxIds(prevMaxIds => ({ ...prevMaxIds, [category]: maxId }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout setMaxId={setMaxId} maxIds={maxIds}><Home /></MainLayout>} />
        <Route path="/category/DataStructures" element={<SubLayout maxIds={maxIds}><DataStructures setMaxId={setMaxId} /></SubLayout>} />
        <Route path="/category/OperatingSystems" element={<SubLayout maxIds={maxIds}><OperatingSystems setMaxId={setMaxId} /></SubLayout>} />
        <Route path="/category/:name" element={<SubLayout maxIds={maxIds}><Category setMaxId={setMaxId} /></SubLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
