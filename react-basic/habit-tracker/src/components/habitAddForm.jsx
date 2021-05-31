import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
	formRef = React.createRef();
	inputRef = React.createRef();

	onSubmit = (event) => {
		event.preventDefault(); //브라우저 리로딩을 막기위한 코드
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);
		//초기화
		//this.inputRef.current.value = '';
		//또는
		this.formRef.current.reset();
	};

	render() {
		console.log('HabitForm');
		return (
			<form
				ref={this.formRef}
				action=""
				className="add-Form"
				onSubmit={this.onSubmit}
			>
				<input
					ref={this.inputRef}
					type="text"
					className="add-input"
					placeholder="Habit"
				/>
				<button className="add-button">Add</button>
			</form>
		);
	}
}

export default HabitAddForm;
