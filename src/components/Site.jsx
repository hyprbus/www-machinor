import React from 'react';
import GetContent from '../containers/GetContent';
import { CONTENTSOURCE } from './appSettings';

function Site() {
  return (
    <GetContent source={CONTENTSOURCE} language="en" />
  );
}

export default Site;
