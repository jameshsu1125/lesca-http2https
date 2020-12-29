import React from 'react';
import { render } from 'react-dom';
import http2https from './../lib/index';

import './styles.css';

http2https.go();

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
