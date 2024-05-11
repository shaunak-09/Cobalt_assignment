
import './App.css';
import React from 'react';
import Landingpage from './Components/landing_page';
import Login from './Components/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Message from './Components/message';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route  path="/" element={<Landingpage />} />
          <Route  path="/login" element={ <Login />} />
          <Route path="/msgForm/:token" element={<Message/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
