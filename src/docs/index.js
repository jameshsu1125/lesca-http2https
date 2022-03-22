import React from 'react';
import { render } from 'react-dom';
import Http2https from '../lib/index';

import './styles.css';

Http2https();

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
