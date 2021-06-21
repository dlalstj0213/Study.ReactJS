import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import Youtube from './service/youtube';
import axios from 'axios';
//import data from './json/apiKeys.json'; //json 파일 불러오기

const httpClient = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	param: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);
ReactDOM.render(
	<React.StrictMode>
		<App youtube={youtube} />
	</React.StrictMode>,
	document.getElementById('root')
);
