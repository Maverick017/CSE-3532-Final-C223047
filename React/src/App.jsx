import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import ComedyPage from './components/ComedyPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VideoGrid />} />
        <Route path="/comedy" element={<ComedyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
