import React from 'react';
import './app.css';

function App() {
	//https://ko.reactjs.org/docs/jsx-in-depth.html 참고

	// return <h1>Hello :)</h1>;
	
	/** 
	 * 1. JSX없이 사용하는 React
	*/
	// return React.createElement('h1', {style: {'color':'blue'}}, 'Hello :) !!');
	
	/** 
	 * 2. JSX style 입히기
	 */
	// return <h1 style={{color:'red'}}>Hello :D</h1>;
	
	/**  
	 * 3. 간단한 {}괄호 사용
	 */
	// const name = 'Rhie';
	// return <h1>Hello! I'm {name} :)</h1>;

	/** 
	 * 4. 형제노드 사용
	 * JSX는 형제노드를 사용하기 위해서 한 태그로 묶여 있어야 한다.
	 * <div> 또는 <React.Fragment> 또는 <fragment> 또는 <> 사용 가능
	 * div, fragment 는 디버깅시 해당 태그가 감싸고 있는 것을 볼 수 있음
	 * React.Fragment, <> 는 디버깅시 해당 태그가 감싸고 있지 않은 것을 볼 수 있음
	 * 상황에 맞춰서 쓸 것!
	 */
	// return (
	// 	<>
	// 		<h1>Hello~ :D</h1>
	// 		<h1>Hi~ :)</h1>
	// 	</>
	// );

	/**
	 * 5. JSX 안에 자바스크립트 코드 작성
	 */
	const name = 'Minseo';
	//const name = '';
	//const name = undefined;
	//const name = null;
	return (
		<React.Fragment>
			<h1>Hello!</h1>
			{name && <h1>Hi! {name} :)</h1>}
			{
				['❤', '🍎'].map(item => (
					<h1>{item}</h1>
				))
			}
		</React.Fragment>
	);
}

export default App;
