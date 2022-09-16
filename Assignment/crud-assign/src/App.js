import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Add from './pages/Add';
import View from './pages/View';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    
      <Header  />
    // < Home />
    // < View />
    // <BrowserRouter>
    // <div className='App'>
    //   <Header />
    //   {/* <ToastContainer />
    //   <Routes>
    //     <Route>
    //       <Route exact path='/' element={ Home }/>
    //       <Route path="/add" element={Add} />
    //       <Route path="/view" element={View} />
    //     </Route>
    //   </Routes> */}

    // </div>

    // </BrowserRouter>
  );
}

export default App;
