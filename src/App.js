import React from 'react';
import mainCoverImage from './assets/piston-video-cover-img.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <video src="./piston-video-presentation.mp4" poster={mainCoverImage} autoPlay controls></video>
    </div>
  );
}

export default App;
