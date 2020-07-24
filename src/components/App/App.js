import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import NavMenu from '../NavMenu/NavMenu'
import Home from '../Home/Home'
import About from '../About/About'
import PressPage from '../PressPage/PressPage'
import Contact from '../Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <NavMenu></NavMenu>
      <div>
        <Switch>
          <Route exact path="/" component={Home} heading="/home" />
          <Route exact path="/about" component={About} />
          <Route exact path="/press" component={PressPage} />
          <Route exact path="/contact" component={Contact} />

        </Switch>
      </div>

        

    </BrowserRouter>
  );
}

export default App;
