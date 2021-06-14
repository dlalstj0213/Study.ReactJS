import React, { useState, useEffect } from 'react';
import styles from './css/app.module.css';
import * as Com from './js/common';
import data from './json/apiKeys.json'; //json 파일 불러오기
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

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
		<div className={styles.app}>
			<SearchHeader />
			<VideoList videos={videos} />
		</div>
	);
}

export default App;
