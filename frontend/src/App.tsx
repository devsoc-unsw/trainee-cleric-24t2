import React from 'react';
import Navbar from './Components/Navbar';
import FeatureSection from './Components/FeatureSection';
import HeroSection from './Components/HeroSection';
import Workflow from './Components/Workflow';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Routes>
      <Route path="/" element = {""}/>
      <Route path = "/signup" element={<SignUpPage/>} />
      <Route path = "/login" element = {<LoginPage/>} />
    </Routes>
    </>
  );
}

export default App;
