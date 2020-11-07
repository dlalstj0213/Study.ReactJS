# 📕 React 개념
## Component
- ✔ **Class Component**
    ```javascript
    class LikeButton extentds Component {
        state = {
            numberOfLikes = 0,
        };
        render(){
            return <button>
                {this.state.numberOfLikes}
            </button>;
        }
    }
    ```
  - 정의하고자 하는 컴포넌트가 state가 있고 그 상태에 따라서 주기적으로 업데이트 되야한다면 클래스 컴포넌트르 쓰면 된다.

- ✔ **Function Component**
    ```javascript
    funtion App(){
        return <h1>Hello</h1>
    }
    ```
  - 정의하고자 하는 컴포넌트가 state가 없고 항상 정적으로 표기 된다면 함수 컴포넌트를 이용해서 간단하게 컴포넌트를 만들 수 있다.

- ✔ **차이점**
  - 함수 컴포넌트는 클래스 컴포넌트의 특징인 state도 없고 lifecycle methods도 없다.
- **BUT**❗
  - React 16.8 version 부터는 함수에서도 클래스의 특징을 가질 수 있는 React Hook이 도입되었다.
  - 즉 React Hook을 이용한다면 함수 안에서도 state, lifecylce methods를 사용할 수 있다.
- **THEN**❓ React Hook으로 인해서 클래스와 함수의 특별한 차이점이 보이지 않는다. 그렇다면 왜 굳이 React 개발자들은 Reack Hook을 만들었을까? 💡
  - 클래스 디자인의 어려움
    - 객체지향의 지식이 부족한 개발자들에게 어려운 구조가 탄생
    - 클래스 멤버변수를 접근하기 위한 `this.`의 어려움 (this binding issue)
    - 중복되는 코드