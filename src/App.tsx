import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Overview from './components/Overview';
import Team from './components/Team';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/team" element={<Team />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
