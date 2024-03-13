import './App.css'
import Home from './component/home/Home'
import { Routes, Route } from "react-router-dom";
import Navigation from './layout/nav/Navigation';
function App() {
 

  return (
    <>
    <Navigation/>
     <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
