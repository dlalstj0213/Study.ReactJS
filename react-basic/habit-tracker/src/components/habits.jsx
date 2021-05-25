import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
	state = {
		habits: [
			{ name: 'Reading', count: 0, id: 'habit_1' },
			{ name: 'Running', count: 0, id: 'habit_2' },
			{ name: 'Coding', count: 0, id: 'habit_3' },
		],
		events: {
			handleIncrement: (habit) => {
				/*
        // state 오브젝트를 직접적으로 수정하는건 좋지않다 !!!
				habit.count++;
				this.setState(this.state);
        */
				const habits = [...this.state.habits];
				const index = habits.indexOf(habit);
				habits[index].count++;
				// key와 value 이름이 똑같으면 하나로 생략가능
				//this.setState({ habits: habits });
				this.setState({ habits });
			},
			handleDecrement: (habit) => {
				const habits = [...this.state.habits];
				const index = habits.indexOf(habit);
				const count = habits[index].count - 1;
				habits[index].count = count < 0 ? 0 : count;
				this.setState({ habits: habits });
			},
			handleDelete: (habit) => {
				const habits = this.state.habits.filter((item) => item.id !== habit.id);
				this.setState({ habits: habits });
			},
		},
	};

	handleIncrement = (habit) => {
		habit.count++;
		this.setState(this.state);
	};

	handleDecrement = (habit) => {};

	handleDelete = (habit) => {};

	render() {
		return (
			<ul>
				{this.state.habits.map((habit) => {
					return (
						<Habit
							key={habit.id}
							habit={habit}
							events={this.state.events}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onDelete={this.handleDelete}
						/>
					);
				})}
			</ul>
		);
	}
}

export default Habits;
