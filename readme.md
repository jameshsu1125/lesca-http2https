[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

redirect url to SSL.

#### [Live Demo](https://jameshsu1125.github.io/lesca-http2https/)

# Installation

```sh
npm install lesca-http2https --save
```

## Usage

As a Node module:

```javascript
import { toHttps } from 'lesca-http2https';
toHttps(); // http://www.exsamle.com => https://www.exsamle.com
```

## Development

### Methods

| method         |       description       | return |
| :------------- | :---------------------: | -----: |
| .**toHttps**() |   redirect url to SSL   |   void |
| .**toHttp**()  | redirect url to not SSL |   void |

### Features

- TypeScript
- maintain if necessary
