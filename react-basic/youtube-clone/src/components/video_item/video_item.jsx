import React from 'react';
import styles from '../../css/video/video_item.module.css';

const VideoItem = ({ video: { snippet: snip } }) => (
	<li className={styles.container}>
		<div className={styles.video}>
			<img
				className={styles.thumnail}
				src={snip.thumbnails.medium.url}
				alt="video thumnail"
			/>
			<div className={styles.metadata}>
				<p className={styles.title}>{snip.title}</p>
				<p className={styles.channel}>{snip.channerlTitle}</p>
			</div>
		</div>
	</li>
);

export default VideoItem;
