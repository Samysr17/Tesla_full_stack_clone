import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import Home from './components/Home';
import Testdrive from './components/Testdrive';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Section from "./components/Section"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Header from './components/Header'
import Home2 from './components/Home2';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Testdrive/>,<Header/>,
        <Section/>
       ,<Section1/>
        ,<Section2/>
        ,<Section3/>
        ,<Section4/>
        ,<Section5/>]}/>
        <Route path="/page2" element={<Home2/>}/>
        <Route path="/Section1" element={<Section1/>}/>
        <Route path="/Section2" element={<Section2/>}/>
        <Route path="/Section3" element={<Section3/>}/>
        <Route path="/Section4" element={<Section4/>}/>
        <Route path="/Section5" element={<Section5/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
