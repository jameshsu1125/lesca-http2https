const toHttps = () => {
  if (window.location.hostname == 'localhost') return;
  if (location.protocol != 'https:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
};

const toHttp = () => {
  if (window.location.hostname == 'localhost') return;
  if (location.protocol != 'http:') {
    location.href = 'http:' + window.location.href.substring(window.location.protocol.length);
  }
};

const Http2https = toHttps;

export { toHttp, toHttps };
export default Http2https;
