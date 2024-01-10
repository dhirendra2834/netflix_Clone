import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Toprated from './Toprated'
import Upcoming from './Upcoming';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/toprated" element={<Toprated/>} />
        <Route exact path="/upcoming" element={<Upcoming/>} />


      </Routes>
    </div>
  );
}

export default App;
