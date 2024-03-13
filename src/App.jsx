import './App.css'
import Home from './component/home/Home'
import { Routes, Route } from "react-router-dom";
import HeroPage from './layout/HeroPage';
import Footer from './layout/footer/Footer';
function App() {
 

  return (
    <>
    <HeroPage/>
     <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
