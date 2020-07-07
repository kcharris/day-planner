import React from 'react';
import './App.css';
import TimeOverview from './components/TimeOverview'

function App() {
  return (
      <TimeOverview date = {new Date()} />
      //<ItemList/>
  );
}

export default App;
