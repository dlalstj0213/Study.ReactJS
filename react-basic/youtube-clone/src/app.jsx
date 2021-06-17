import React, { useState, useEffect } from 'react';
import styles from './css/app.module.css';
//import * as Com from './js/common';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

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
			.then((videos) => setVideos(videos));
	}, []);

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList
						videos={videos}
						onVideoClick={selectVideo}
						display={selectedVideo ? 'list' : 'grid'}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
