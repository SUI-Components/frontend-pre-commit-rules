import React from 'react';
import ReactDom from 'react-dom';
import SuiCard from '../src';
import '../src/index.scss';
import './styles/prism.scss';
import './index.scss';

import './styles/syntax.scss';
import './styles/codemirror.scss';
import './styles/demo.scss';

const top = (
    <a href='http://bit.ly/1jt4zRp'>
      <img src='http://bit.ly/1FzqHDX' />
    </a>
);

const bottom = (
  <div>
    <h2>Fishermen at work</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href='http://google.com'>Contact</a>
  </div>
);

const componentExample = (
  // Tweak these values to see changes in realtime
  <SuiCard
    topImgDefault='http://bit.ly/1LYWHy0'
    topImgDefaultLink='http://bit.ly/1KPfv2H'

    // Remove topComponent to see default values
    topComponent={top}
    bottomComponent={bottom}

    // Set to false to change default orientation
    landscapeLayout={true}
    contentFirst={true}
    />);

ReactDom.render(
  componentExample,
  document.getElementById('main'));
