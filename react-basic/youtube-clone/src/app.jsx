import React, { useState, useEffect, useCallback } from 'react';
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

	/**
	 * useCallback을 조심해서 사용하자!
	 * useCallback은 한 번 선언되면 메모리상 계속 존재하기 때문에 메모리 비용이 발생한다.
	 * 그러니 정말 필요할 때에만 사용해야한다는 것을 잊지말자
	 */
	const search = useCallback(
		(query) => {
			setSelectedVideo(null);
			youtube
				.search(query) //
				.then((videos) => setVideos(videos));
		},
		[youtube]
	);

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
	}, [youtube]);

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
