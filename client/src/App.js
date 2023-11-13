import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import Home from './components/Home';
import Testdrive from './components/Testdrive';
import {Routes,Route } from "react-router-dom";
import Section from "./components/Section"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Header from './components/Header'
import Home2 from './components/Home2';
import Home4 from './components/Home4';
import Home5 from './components/Home5';
// import { AuthContextProvider } from './context/Authicontext';
// import { Authi_email_contextProvider } from './context/Authi_email_context'
import Signin from './components/Signin';
import Home1 from './components/Home1';
import Success from './components/success';
import Failure from './components/failure';
import Home3 from './components/Home3';
import Home0 from './components/Home0';
import Home_cart  from './Home_cart';
import { Addtocart_contextProvider } from './context/addtocart-context';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import protected_route from './protected_route'


function App() {
  return (
    <div className="">
      <AuthContextProvider>
      <Addtocart_contextProvider>
      <Routes>
      <Route path="/" element={[<Testdrive/>,<Header/>,
        <Section/>
       ,<Section1/>
        ,<Section2/>
        ,<Section3/>
        ,<Section4/>
        ,<Section5/>]}/>
        <Route path="/Model_S" element={<Home2/>}/>
        <Route path="/Success" element={<Success/>}/>
        <Route path="/Failure" element={<Failure/>}/>
        <Route path="/SignIn" element={<Signin/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Solar_Roofs" element={<Home4/>}/>
        <Route path="/Powerwall" element={<Home5/>}/>
        <Route path="/Solar_Panels" element={<Home1/>}/>
        <Route path="/Model_Y" element={<Home3/>}/>
        <Route path="/Model_X" element={<Home0/>}/>
        <Route path="/addtocart" element={<protected_route><Home_cart/></protected_route>}/>
      </Routes>
      </Addtocart_contextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;