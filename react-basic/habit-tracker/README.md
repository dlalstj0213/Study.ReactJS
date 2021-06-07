# Habit-Tracker 를 만들면서 ... 

## 배운점

### What is Props

`props`는 간단히 말하자면 속성을 나타내는 데이터이다. 중요한 것은 함수 컴포넌트나 클래스 컴포넌트에서 `props`를 사용할때는 읽기 전용으로만 사용하고 수정하지 말라고 React 문서에 나와있다. 
> All React components must act like pure functions with respect to their props.
> <br>
> 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.
> https://reactjs.org/docs/components-and-props.html

### What is State

`state`는 `props`와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어된다.
 - `state` 작성시 주의해야 할 사항
  1. state를 직접 수정하지 않기 (`setState()` 사용하기)
  ```jsx
  //wrong
  this.state.comment = 'Hello React';
  //correct
  this.setState({comment: 'Hello React'});
  ```
  2. state 업데이트는 비동기적임
  ```jsx
  //wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  //correct
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  ```
### What is JSX

jsx 표현식을 보면 마치 html코드와 비슷해 자칫 html코드로 해석할 수 있는데 jsx는 javaScript를 확장한 문법이다.

https://reactjs.org/docs/introducing-jsx.html

### Differences between Class and Function Components

이번 Habit-Tracker를 만들면서 클래스 컴포넌트와 함수 컴포넌트 둘다 사용해 만들어봤는데, 기본적인 props와 state 활용 흐름은 같다. 하지만 this 접근 범위와 props, state 선언 방식 등 다른 표현 방식이 존재한다.

나는 아직까지 클래스 컴포넌트가 더 좋고 함수 컴포넌트가 더 좋다는 판별을 내리기 힘든것 같다. 상황에 맞춰 사용하는 방식이 좋을 듯 하다.

## 어려웠던점

아무래도 JavaScript의 실력이 탄탄하지 못해 어려운 부분이 많았다. 하지만 어려운 부분을 마주하고 이해하고 해결해가면서 공부하는 방식이 더 재밌고 기억에 남는것 같다.


### [**Habit-Tracker URL**](https://60bb80dc4d9b8cb1af64d6d6--min-habit-tracker.netlify.app)

