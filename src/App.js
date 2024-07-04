
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from "./View/Home/Index";
import Projects from './View/Projects/Project';
import Resume from './View/Resume/Resume';
import Contact from './component/Contact';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route element = {< MainLayout />}>
        <Route path='/' element = {< Home />} />
        <Route path='/projects' element = {< Projects />} />
        <Route path= '/resume' element ={< Resume />} />
        <Route path= '/contact' element ={< Contact />} />
      </Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
