import React, { Component } from 'react';
import Navbar from './component/navbar.js'
import Home from './component/Home.js'

import { BrowserRouter, Route,Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div>
            <Navbar/>
              <Switch>
                <Route path="/" component={Home} />                
              </Switch>
          </div>      
        </BrowserRouter>     
    );
  }
}

export default App;
