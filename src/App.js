import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './App.css';

import Layout from '../src/components/Layout/Layout';

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  componentDidMount(){
    document.title = "P1R4W4"
  }

  render () {
    return (
      <Layout/>
    );
  }
}

export default App;
