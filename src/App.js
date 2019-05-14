import React from 'react';
import mainCoverImage from './assets/piston-video-cover-img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mainCoverImage} className="App-logo" alt="logo" />
      </header>
      <video src="./assets/piston-video-presentation.mp4" width="400" height="300" controls></video>
    </div>
  );
}

export default App;
