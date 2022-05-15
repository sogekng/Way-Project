import './App.css';
import React from 'react';
import Content from './components/Content'
import Navigator from './components/Navigator'
import DarkTheme from './components/DarkTheme';

function App() {
  
  return (
    <>
    <DarkTheme />
      <Content />
    <Navigator />
    </>
    );
}

export default App;
