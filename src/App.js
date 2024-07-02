
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from "./View/Home/Index";
import Projects from './View/Projects/Project';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route element = {< MainLayout />}>
        <Route path='/' element = {< Home />} />
        <Route path='/projects' element = {< Projects />} />
      </Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
