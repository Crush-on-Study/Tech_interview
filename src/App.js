import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import DataStructures from './pages/DataStructures';
import OperatingSystems from './pages/OperatingSystems';
import Database from './pages/Database';
import Category from './pages/Category';
import MainLayout from './components/MainLayout';
import SubLayout from './components/SubLayout';
import './styles/App.css';

function App() {
  const [maxIds, setMaxIds] = useState({});
  const [loading, setLoading] = useState(true);

  const setMaxId = (category, maxId) => {
    setMaxIds(prevMaxIds => ({ ...prevMaxIds, [category]: maxId }));
  };

  useEffect(() => {
    axios.get('http://localhost:5000/counts')
      .then(response => {
        setMaxIds(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout maxIds={maxIds}><Home /></MainLayout>} />
        <Route path="/category/DataStructures" element={<SubLayout maxIds={maxIds} setMaxId={setMaxId}><DataStructures /></SubLayout>} />
        <Route path="/category/OperatingSystems" element={<SubLayout maxIds={maxIds} setMaxId={setMaxId}><OperatingSystems /></SubLayout>} />
        <Route path="/category/Database" element={<SubLayout maxIds={maxIds} setMaxId={setMaxId}><Database /></SubLayout>} />
        <Route path="/category/:name" element={<SubLayout maxIds={maxIds} setMaxId={setMaxId}><Category /></SubLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
