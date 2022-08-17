import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { LandingPage } from './components/dashboard/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <LandingPage />
      </body>
    </div>
  );
}

export default App;
