<img style="background-color:#61DAFB; border-radius:5px;" height="40" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg"/>

# REACT

## ❓ What is React

- ✔ **리액트란?**
  - facebook에서 만든 JavaScript library
  - user interface를 만들 수 있는 library
    - 사용자에게 ui를 보여주고 event를 처리할 수 있게 해준다
  - Components로 이루어진 ui library (독립적*independent*, 재사용성*reusable*, 고립성*isolated*)
  - 장점
    - 이전 버전과 호환이 잘 되어서 안정성과 신뢰도가 있다
    - facebook으로 만들어진 이후 강력한 커뮤니티가 구성되어 문서화가 잘 되어있다

- ✔ **리엑트 간단한 코드 구성과 원리**

    ```javascript
    import React from 'react';

    // 컴포넌트 클래스 정의 (state / render)
    class LikeButton extends Component {
        state = {
            numberOfLikes: 0,
        };  // state: 컴포넌트에 들어있는 데이터를 나타내는 객체
        render(){
            return <button>
                {this.state.numberOfLikes}
                </button>;
        }   // render: (jsx) 사용자에게 ui를 표기 할 수 있는 render 함수
    }

    export default LikeButton;
    ```

  - `state`의 데이터가 변동이 되면 변동된 데이터가 화면에 보여질 수 있도록 `render()`함수가 반복적으로 호출된다(*Re-render*).
  - 💡 <**성능 문제**> *데이터가 변동될 때마다 랜더 함수가 계속 호출이 된다면 성능상 비효율적이지 않을까?*
    - ❕ 리액트는 리액트만의 **가상의 돔트리**(***Virtual Dom Tree***)가 존재한다. 가상의 돔트리를 통해 리액트의 컴포넌트들이 메모리상에 보관되어 있다. 그래서 데이터 변동이 있을시 리액트의 모든 돔트리 구조들이 돔트리에 바로 업데이트 되는 것이 아니고 컴포넌트의 변동 부분이 발생해 자식 컴포넌트에 랜더 함수가 호출이 되면 이전 가상의 돔트리와 비교해 실질적으로 어떠한 부분이 업데이트 되어야 하는지 계산후 필요한 부분만 실제 돔트리에 업데이트한다. 그래서 랜더 함수가 많이 호출이 되어도 성능상 크게 걱정할 일이 없다.

---

## 🛠 React Tools

- ✔ 필요한 툴 설치
  - Terminal(나는 git bash를 사용함), Git, Node.js, npm, yarn
  - Git 다운로드
  - Node.js 다운로드 (npm도 자동으로 다운됨)
  - yarn 다운로드 `npm install yarn --global`
  - version 확인

    ```command
    git --version
    node -v
    npm -v
    yarn -v
    ```
