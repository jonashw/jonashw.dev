import './App.css';
import React from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div style={{
      background:'#ebeef1',
      padding:'3em'
    }}>
      <Contact />
      <div className="mt-5">
        <Portfolio/>
      </div>
    </div>
  );
};

export default App;