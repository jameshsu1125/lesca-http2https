import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import { toHttp, toHttps } from '../../lib';

const Demo = () => {
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            toHttps();
          }}
        >
          to https
        </Button>
        <Button
          onClick={() => {
            toHttp();
          }}
        >
          to http
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
