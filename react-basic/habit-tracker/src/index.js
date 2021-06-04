import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	/**
	 * Class, PureComponent, function Component, memo
	 */
	//<App />,
	/**
	 * React Hook
	 */
	<SimpleHabit></SimpleHabit>,
	document.getElementById('root')
);
