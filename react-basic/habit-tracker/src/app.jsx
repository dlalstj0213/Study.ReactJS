import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
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
				const habits = [...this.state.habits]; // 새로운 배열에 복사
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
			handleAdd: (name) => {
				//const habits = [...this.state.habits, {id : Date.now(), name: name, count: 0}]; // Separate operator
				const habits = [
					...this.state.habits,
					{ id: Date.now(), name, count: 0 },
				]; // 동일한 name 생략가능
				this.setState({ habits });
			},
		},
	};

	render() {
		return (
			<>
				<Navbar
					totalCount={this.state.habits.filter((item) => item.count > 0).length}
				/>
				<Habits habits={this.state.habits} events={this.state.events} />
			</>
		);
	}
}

export default App;
