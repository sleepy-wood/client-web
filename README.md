![banner](https://github.com/sleepy-wood/client-web/blob/dev/client-web.png)

# client-web

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/sleepy-wood">
    <img src="https://github.com/sleepy-wood/client-web/blob/dev/src/assets/images/logo.png" alt="Logo" width="120" height="120">
  </a>
  <h3 align="center">Sleepywood NFT Marketplace</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="preview">Preview</a></li>
        <li><a href="detail">Detail</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Preview

<div align="center">
  <img src="https://github.com/sleepy-wood/client-web/blob/dev/project.gif" alt="project" width=480 />
</div>

### Detail

<div align="center">
  <img src="https://github.com/sleepy-wood/client-web/blob/dev/client-web.drawio.png" alt="project" width=480 />
</div>

1) 글래스모피즘(Glassmorphism) 스타일
   - 글래스모피즘 스타일의 디자인은 최근 1~2년 사이 가장 주목받고 있는 디자인 스타일 중 하나로써 시각적 계층과 화면의 깊이를 표현하는데 훌륭하다는 평가를 받았다.
   - 반투명 재질 스타일은 유리 재질의 도형이 마치 글자 위에 떠있는 듯한 시각적 효과를 주어 계층의 수직성을 확립하고 개체의 흐림 효과는 마치 공간에 떠있는 듯한 3차원적 효과를 표현할 수 있다.

2) 아토믹 디자인 패턴(Atomic Design Pattern)
   - React는 컴포넌트 기반의 프레임워크이다. 
   - 아토믹 디자인 패턴을 도입하여 서비스의 고유한 타이포그래피, 컬러 팔레트 등 디자인의 기초 요소들을 만들고 이것을 기반으로 한 공통 컴포넌트를 정의하여 페이지 마다 컴포넌트의 동일한 스타일을 적용할 수 있도록 했다.

3) React Modules
   - Redux의 Global Provider에서 여러 컴포넌트에서 자주 재사용되는 사용자, 장바구니, 위시리스트, 현재 위치 등의 Global State를 관리했다.
   - styled-components, tailwind, emotion 등의 최신 React Style 모듈을 사용하여 컴포넌트의 스타일을 중복없이 고유하게 관리하여 CSS의 충돌을 제거하고 컴포넌트의 재사용성을 높였다.
   - 이외에도 검증된 React Module을 활용하여 잠재적으로 발생 가능한 오류를 제거하고 사용자에게 직관적인 UI/UX를 제공했다.

### Built With

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white) 

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

1. npm
  ```bash
  npm i -g npm@latest
  ```
2. MetaMask
  - https://metamask.io/
3. Ganache
  - https://trufflesuite.com/ganache/
4. API Server
  - https://github.com/sleepy-wood/server-api

### Installation

1. Clone the repo
  ```bash
  git clone https://github.com/sleepy-wood/client-web.git
  ```
2. Install NPM packages
  ```bash
  npm i
  ```
3. Run App
  ```bash
  npm run start
  ```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/sleepy-wood/client-web.svg?style=for-the-badge
[contributors-url]: https://github.com/sleepy-wood/client-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sleepy-wood/client-web.svg?style=for-the-badge
[forks-url]: https://github.com/sleepy-wood/client-web/network/members
[stars-shield]: https://img.shields.io/github/stars/sleepy-wood/client-web.svg?style=for-the-badge
[stars-url]: https://github.com/sleepy-wood/client-web/stargazers
[license-shield]: https://img.shields.io/github/license/sleepy-wood/client-web.svg?style=for-the-badge
[license-url]: https://github.com/sleepy-wood/client-web/blob/master/LICENSE.txt
