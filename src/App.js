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
import { AuthContextProvider } from './context/Authicontext';
import Signin from './components/Signin';


function App() {
  return (
    <div className="">
      <AuthContextProvider>
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
        <Route path="/account" element={<Signin/>} />
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
