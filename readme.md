[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-http2https --save
```

# Usage

```javascript
import Http2https from 'lesca-http2https';
Http2https(); // http://www.exsamle.com => https://www.exsamle.com
```

# Methods

| method  | options |       description       | default |
| :------ | :-----: | :---------------------: | ------: |
| toHttps |         |   redirect url to SSL   |         |
| toHttp  |         | redirect url to not SSL |         |
