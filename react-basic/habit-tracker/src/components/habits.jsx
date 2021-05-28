import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	handleIncrement = (habit) => {
		this.props.events.handleIncrement(habit);
	};

	handleDecrement = (habit) => {
		this.props.events.handleDecrement(habit);
	};

	handleDelete = (habit) => {
		this.props.events.handleDelete(habit);
	};

	handleAdd = (name) => {
		this.props.events.onAdd(name);
	};

	render() {
		return (
			<>
				<HabitAddForm onAdd={this.props.events.handleAdd} />
				<ul>
					{this.props.habits.map((habit) => {
						return (
							<Habit key={habit.id} habit={habit} events={this.props.events} />
						);
					})}
				</ul>
				<button
					className="habits-reset"
					onClick={this.props.events.handleReset}
				>
					Reset All
				</button>
			</>
		);
	}
}

export default Habits;
