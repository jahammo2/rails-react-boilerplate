import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

import 'src/ui/styles/base/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.setAttribute('id', 'root');

  ReactDOM.render(
    <Router>
      <Routes />
    </Router>,
    document.body.appendChild(el),
  );
});
