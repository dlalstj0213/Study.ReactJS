import React, { Component } from 'react';
//yarn add @fortawesome/fontawesome-free
class Habit extends Component {
	// handleIncrement = (event) => {
	//   console.log(event);
	// };

	handleIncrement = () => {
		this.props.events.handleIncrement(this.props.habit);
	};

	handleDecrement = () => {
		this.props.events.handleDecrement(this.props.habit);
	};

	handleDelete = () => {
		this.props.events.handleDelete(this.props.habit);
	};

	render() {
		//console.log(this.props);
		// const habitName = this.props.habit.name;
		// const habitCount = this.props.habit.count;
		const { name, count } = this.props.habit;
		console.log(this.props.habit.id);
		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={this.handleIncrement}
				>
					<i className="fas fa-plus-square"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={this.handleDecrement}
				>
					<i className="fas fa-minus-square"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={this.handleDelete}
				>
					<i className="fas fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
