import React, { Component } from 'react';
import Layout from './components/Layout';
import Movies from './pages/Movies';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Movies />
      </Layout>
    )
  }
}
