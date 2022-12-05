import './App.css';
import './style/LandingPage.css'
import CarDetail from './pages/CarDetail';
import HomePage from './pages/HomePage';
import SearchCar from './pages/SearchCar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchcar" element={<SearchCar/>} />
      <Route path="/cardetail/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
