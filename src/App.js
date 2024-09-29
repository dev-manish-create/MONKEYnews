
import './App.css';

import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
apikey = process.env.REACT_APP_NEWS_API;
  render() {
   
    return (
      <div>
        <Router>
          
        <Navbar/>
        <Routes>
        <Route exact path="/" element = {<News apikey={this.apikey} category="general" pagesize = "5" />} />
        
          <Route exact path="/business"element = {<News apikey={this.apikey}  category="business" pagesize = "5" />} />
          
          <Route  exact path="/entertainment" element = {<News  apikey={this.apikey}  category="entertainment" pagesize = "5" />} />
          
          <Route exact path="/sports" element = {<News apikey={this.apikey}  category="sports" pagesize = "5" />}/>
        
          <Route exact path="/health" element = {<News apikey={this.apikey} category="health" pagesize = "5" />}/>
          
          <Route exact path="/science" element = {<News apikey={this.apikey} category="science" pagesize = "5" />}/>
          
          <Route exact path="/technology" element = {<News apikey={this.apikey}  category="technology" pagesize = "5" />}/>
         
        
        </Routes>
        </Router>
      </div>
    )
  }
}
