import Navbar from './Components/Navbar';
import FeatureSection from './Components/FeatureSection';
import HeroSection from './Components/HeroSection';
import Workflow from './Components/Workflow';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function HomePage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    </>
  ) 
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path = "/signup" element={<SignUpPage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
