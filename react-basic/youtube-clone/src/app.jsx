import React, { useState, useEffect } from 'react';
import './app.css';
import Navbar from './components/navbar';
import VideoList from './components/video_list/video_list';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAtL0ZummCG7z_ET2STLFCdPc5zojxW5h0&part=snippet&maxResults=25&q=bts&key=AIzaSyAtL0ZummCG7z_ET2STLFCdPc5zojxW5h0',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setVideos(result.items))
			.catch((error) => console.log('error', error));
	}, []);

	return (
		<>
			<Navbar />
			<VideoList videos={videos} />
		</>
	);
}

export default App;
