import styles from '../../css/header/search_header.module.css';

import React from 'react';

const SearchHeader = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.img} src="/images/youtube_play.png" alt="logo" />
				<h1 className={styles.title}>Youtube</h1>
			</div>
			<input className={styles.input} type="search" placeholder="Search..." />
			<button className={styles.button} type="submit">
				<i className="fas fa-search"></i>
			</button>
		</header>
	);
};

export default SearchHeader;
