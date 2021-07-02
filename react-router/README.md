# React is a library of Making Single Page Application

리액트는 SPA(싱글 페이지 어플리케이션)을 쉽게 만들 수 있는 라이브러리이다.
또한 React는 **CSR (Client Side Renderging) 방식**으로 SPA(싱글 페이지 어플리케이션)를 만들 수 있다. 

(React 프레임워크 -> Next.js)

## Single Page Application

싱글 페이지 어플리케이션이란 하나의 URL로 한 번 페이지가 로딩되고 나면 그 안에서 사용자가 다른 페이지를 클릭하거나 링크를 클릭했을 때 새로운 페이지가 열리는 것이 아니고 전체적인 페이지가 Refresh 되는 것도 아닌 그저 부분적인 내용만 업데이트 되는 것이 바로 싱글페이지 어플리케이션이다.

## SSR (Server Side Rendering)

SSR은 **Server Side Rendering** 약자로 처음 클라이언트가 접속했을때 브라우저에서 자바스크립트 코드를 다운 받아 해석 할 때 까지 기다리지 않고 **서버에 보여질 HTML을 미리 준비해 클라이언트한테 응답**해주는 방식이다. 사용자가 웹 페이지에 접속했을 때 서버에서는 사용자에게 렌더링될 HTML 파일을 응답하여 사용자에게 웹 페이지가 바로 렌더링 될 수 있도록 해준다. 그 후 브라우저는 자바스크립트 파일을 다운받아 해석하고 실행하는 절차를 가진다.

--> 사용자는 브라우저가 자바스크립트 파일을 해석하고 보여질때까지 기다리지 않고 바로 렌더링 하기 때문에 사용자에게는 좋은 경험을 줄 수 있다.

## CSR (Client Side Rendering)

CSR은 Client Side Rendering 약자로 **자바스크립트 파일을 브라우저에서 해석해 렌더링하는 방식**이다. 클라이언트가 자바스크립트 파일을 브라우저에서 해석한 후 HTML을 렌더링한다.

--> 사용자가 기다려야하는 시간이 많아진다.

> 참고URL : [[ React ] SSR ( 서버사이드렌더링 ) & CSR ( 클라이언트사이드렌더링 )](https://yerinko.tistory.com/9)

## The Advantages of Single Page Application :

- 컴포넌트 정의와 재사용이 쉽다.
- 사용자에게 부드러운 UX를 줄 수 있다.
- 페이지 구성에 필요한 데이터만 요청하고 사용해서 서버 부하가 줄어든다.

## The Problems of Single Page Application :

싱글 페이지 어플리케이션은 해당 페이지 안에서만 동작이 일어나기 때문에
- 북마크를 할 수 없고
- 브라우저의 뒤로가기, 앞으로가기 내비게이션에 추가되지 않으며
- 검색엔진(SEO)에 취약하다.(CSR인 경우, Client Server Side)


## How to Solve?

이러한 싱글 페이지 어플리케이션의 단점을 보안하기 위해 싱글 페이지 어플리케이션을 유지하되 URL을 붙일 수 있는, 해당하는 페이지로 바로 가거나 북마크 추가 등 과 같은 기능을 할 수 있는 **React Router** 를 사용한다.

## Routing

Routing은 특정 URL을 이용했을 때 어떤 경로를 이용해서 데이터를 받아올지를 결정해준다. (HTTP Request 메커니즘)