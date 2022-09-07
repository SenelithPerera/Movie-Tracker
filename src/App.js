import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from './components/header/Header';


import './App.css';
import { RouterHub } from './routes/RouterHub';



function App() {
  return (
    <Router>
      <Header />
      <RouterHub />
    </Router>
  );
}

export default App;
