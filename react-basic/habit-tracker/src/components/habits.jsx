import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm_20210604';

class Habits extends Component {
	render() {
		console.log('habits');
		return (
			<div>
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
				<button
					className="habits-clear"
					onClick={this.props.events.handleClearAll}
				>
					Clear All
				</button>
			</div>
		);
	}
}

export default Habits;
