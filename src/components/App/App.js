import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import NavMenu from '../NavMenu/NavMenu'
// import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Photos from '../Photos/Photos'
import Visuals from '../Visuals/Visuals'
import Lyrics from '../Lyrics/Lyrics'
import PressPage from '../PressPage/PressPage'
import Contact from '../Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <NavMenu></NavMenu>
      <div className="page">
        {/* <Heading title={"Heading"}/> */}
        <Switch>
          {/* <div className="page-content"> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/visuals" component={Visuals} />
          <Route exact path="/lyrics" component={Lyrics} />
          <Route exact path="/press" component={PressPage} />
          <Route exact path="/contact" component={Contact} />
          {/* </div> */}
          


        </Switch>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
