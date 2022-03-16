import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router'
import React from 'react';
import Index from './pages/Index';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={process.env.PUBLIC_URL +"/"} element={<Index/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
