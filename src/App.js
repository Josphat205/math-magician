import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Calc from './components/Calc';
import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-div">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calc />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}

export default App;
