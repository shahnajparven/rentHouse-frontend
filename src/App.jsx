import './App.css'
import Home from './component/home/Home'
import { Routes, Route } from "react-router-dom";
import HeroPage from './layout/HeroPage';
function App() {
 

  return (
    <>
    <HeroPage/>
     <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
