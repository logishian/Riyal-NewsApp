import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>} />
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>} />
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}
