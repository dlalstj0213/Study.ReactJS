import styles from '../../css/header/search_header.module.css';

import React, { memo, useRef } from 'react';

const SearchHeader = memo(({ onSearch }) => {
	const inputRef = useRef();

	const handleSearch = () => {
		const value = inputRef.current.value;
		onSearch(value);
	};

	const onClick = (e) => {
		//console.log(e);
		handleSearch();
	};
	const onKeyPress = (e) => {
		//console.log(e);
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	console.log('Render() : Header !!');

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.img} src="/images/youtube_play.png" alt="logo" />
				<h1 className={styles.title}>Youtube</h1>
			</div>
			<input
				ref={inputRef}
				className={styles.input}
				type="search"
				placeholder="Search..."
				onKeyPress={onKeyPress}
			/>
			<button className={styles.button} type="submit" onClick={onClick}>
				<i className="fas fa-search"></i>
			</button>
		</header>
	);
});

export default SearchHeader;
