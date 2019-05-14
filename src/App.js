import React from 'react';
import ReactGA from 'react-ga';

import mainCoverImage from './assets/PistonVault.png';
import './App.css';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

const SHOW_VIDEO = process.env.REACT_APP_SHOW_VIDEO === 'true';

function App() {
	ReactGA.pageview('/');
	return (
		<div className="App">
			{SHOW_VIDEO && (
				<video src="./piston-video-presentation.mp4" preload poster={mainCoverImage} autoplay controls></video>
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
