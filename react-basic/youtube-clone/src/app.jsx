import React, { useState, useEffect } from 'react';
import styles from './css/app.module.css';
//import * as Com from './js/common';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);

	const search = (query) => {
		youtube
			.search(query) //
			.then((videos) => setVideos(videos));
	};

	/*
	// 외부 js 파일의 함수 불러오기
	Com.getKey(['youtube', 'google'], function (res) {
		console.log('com.fn : ' + res);
	});
	*/

	useEffect(() => {
		youtube
			.mostPopular() //
			.then(console.log);
	}, []);

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<VideoList videos={videos} />
		</div>
	);
}

export default App;
