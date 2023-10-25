import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/skills';
import { Counter } from './components/counter/counter';
import { AppProviders } from './components/providers/app-providers';
import { MuiMode } from './components/mui/mui-mode';

function App() {
  const skills=['HTML','CSS','JavaScript'];
  return (
    <AppProviders>
      <div className="App">
        {/* <Application/>
        <Skills skills={skills}/> */}
        <Counter/>
        {/* <MuiMode/> */}
      </div>
    </AppProviders>
  );
}

export default App;
