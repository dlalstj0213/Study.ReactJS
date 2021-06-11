import React from 'react';

const Navbar = (props) => {
	return (
		<nav className="navbar">
			<i className="navbar-logo"></i>
			<span>Youtube</span>
			<input className="ipt-search" type="text" value="" />
			<i className="icon-search fas fa-search"></i>
		</nav>
	);
};

export default Navbar;
