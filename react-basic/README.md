# Basic start React

## React 프로젝트 생성

### 간단한 커맨드로 react template 만들기

```
$ yarn create react app [프로젝트명]
```

`$ yarn create react app template`

커맨드로 `create react app` 툴을 이용하면 실전 프로젝트에 필요없는 소스도 같이 만들어진다.

현재 깃에 올라와 있는 template 폴더안에는 불필요한 소스를 제거해 두었다.

### template 폴더를 다른 폴더명으로 복사하기

```
$ cp -R [복사할파일명] [복사된파일명]
```
`$ cp -R template habit-tracker`

`$ cp -R template postCSS-basic`

### 실행

```
$ yarn start
```

## 기본 프로젝트 구조

### `public`

정적인(static) 파일을 담고 있다.

ex) .html, images, resources etc

### `src`

동적인(dynamic) 파일을 담고 있다.

ex) .js, jsx, css etc