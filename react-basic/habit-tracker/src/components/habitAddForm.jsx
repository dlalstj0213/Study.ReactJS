import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault(); //브라우저 리로딩을 막기위한 코드
		const name = inputRef.current.value;
		name && props.onAdd(name);
		//초기화
		//this.inputRef.current.value = '';
		//또는
		formRef.current.reset();
	};

	return (
		<form ref={formRef} action="" className="add-Form" onSubmit={onSubmit}>
			<input
				ref={inputRef}
				type="text"
				className="add-input"
				placeholder="Habit"
			/>
			<button className="add-button">Add</button>
		</form>
	);
});

export default HabitAddForm;
