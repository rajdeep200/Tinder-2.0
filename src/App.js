import React from 'react'
import './App.css';
import Header from './components/Header/header';
import SwipeButtons from './components/swipeButtons/swipeButtons';
import TinderCards from './components/TinderCards/tinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
