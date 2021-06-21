import React, { memo } from 'react';
import styles from '../../css/video/video_item.module.css';

const VideoItem = memo(
	({ video, video: { snippet: snip }, onVideoClick, display }) => {
		const displayType = display === 'list' ? styles.list : styles.grid;

		return (
			<li
				className={`${styles.container} ${displayType}`}
				onClick={() => onVideoClick(video)}
			>
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
	}
);

export default VideoItem;
