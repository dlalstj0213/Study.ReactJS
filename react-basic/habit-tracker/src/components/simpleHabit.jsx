import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
	console.log(props);
	/**
	 * 함수형 컴포넌트에서는 클래스 컴포넌트와 달리
	 * state, setState()로 정의해 사용하지 않고
	 * useState('')로 state를 정의한다
	 * const [state변수이름, set+state변수이름] = useState('초기값');
	 * + useState는 메모리에 저장되어 기억되기 때문에 함수가 호출될때 마다
	 * 계속 새로 생성되지 않는다.
	 */
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Coding');
	/**
	 * 리액트훅에서는 함수가 메번 호출될때마다
	 * createRef()도 계속 호출되면서 새로운 ref가 생성되므로
	 * 재사용하기 위해 userRef()를 쓴다
	 */
	//const spanRef = React.createRef();
	const spanRef = useRef();

	/**
	 * 함수 콜백도 동일한 콜백을 호출하기 위해
	 * useCallback() 을 사용한다.
	 * useCallback() 사용시 주의점은 후에 다시 알아보자
	 */
	const handleIncrement = useCallback((e) => {
		setCount(count + 1);
		//setName(name + count);
	});

	/**
	 * mount 됐을때랑 update됐을때 호출되는 함수
	 * 두번째 인자(파라미터)에서 state변수 또는 props을 배열을 정의하면(ex) ,[count])
	 * 배열안에 정의된 데이터가 변경될때만 호출된다.
	 * 두번째 인자(파라미터)에 빈 [] 배열만 정의하면 처음
	 * mount 됐을때만 호출된다.
	 */
	useEffect(() => {
		console.log(`mounted & updated : ${count}`);
	}, [count, name]);

	return (
		<li className="habit">
			<span className="habit-name" ref={spanRef}>
				{name}
			</span>
			<span className="habit-count">{count}</span>
			<button className="habit-button habit-increase" onClick={handleIncrement}>
				<i className="fas fa-plus-square"></i>
			</button>
		</li>
	);
};

export default SimpleHabit;
