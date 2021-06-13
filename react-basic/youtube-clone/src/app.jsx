import React, { useState, useEffect } from 'react';
import './app.css';
import * as Com from './js/common';
import data from './json/apiKeys.json'; //json 파일 불러오기
import Navbar from './components/navbar';
import VideoList from './components/video_list/video_list';

function App() {
	const [videos, setVideos] = useState([]);

	/*
	// 외부 js 파일의 함수 불러오기
	Com.getKey(['youtube', 'google'], function (res) {
		console.log('com.fn : ' + res);
	});
	*/

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=' +
				data.youtube,
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
