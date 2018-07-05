import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap-superhero.css';
import './css/style.css';

import { AppRouter } from './configs/routes';

import { GiphyContextHoc } from './contexts/gifs.context';

class App extends Component {
  render() {
    return (
      <GiphyContextHoc>
        <div className="container">
          <AppRouter />
        </div>
      </GiphyContextHoc>
    );
  }
}

export default App;
