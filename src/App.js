import React from 'react';
import mainCoverImage from './assets/PistonVault.png';
import './App.css';

const SHOW_VIDEO = process.env.REACT_APP_SHOW_VIDEO === 'true';

function App() {
  return (
    <div className="App">
        {SHOW_VIDEO && (
            <video src="./piston-video-presentation.mp4" poster={mainCoverImage} autoPlay controls></video>
        )}
        {!SHOW_VIDEO && (
            <div className="image">
                <img src={mainCoverImage} />
            </div>
        )}
    </div>
  );
}

export default App;
