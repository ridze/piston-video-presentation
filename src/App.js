import React from 'react';
import mainCoverImage from './assets/piston-video-cover-img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo-wrapper">
           <img src={mainCoverImage} className="App-logo" alt="logo" />
        </span>
      </header>
      <video src="./piston-video-presentation.mp4" width="400" height="300" controls></video>
    </div>
  );
}

export default App;
