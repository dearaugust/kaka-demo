import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './components/Home.js';
import Find from './components/Find.js';
import Release from './components/Release.js';
import News from './components/News.js';
import Mine from './components/Mine.js';

import Gps from './components/Gps.js'

class App extends React.Component {
  render(){
    return(
      <HashRouter>
        <div className='my-wrap'>
          <Header />

          <div className='main'>
            <Route exact path='/' component={Home} />
            <Route path='/find' component={Find} />
            <Route path='/release' component={Release} />
            <Route path='/news' component={News} />
            <Route path='/mine' component={Mine}/>
          </div>
          <Route path='/gps' component={Gps}/>
          <Footer />

        </div>
      </HashRouter>
    )
  }
}

export default App;
