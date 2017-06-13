import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
      <Router>
        <div className='my-wrap'>
          <Header />

          <div className='main'>
            <Route exact path='/kaka-demo/' component={Home} />
            <Route path='/kaka-demo/find' component={Find} />
            <Route path='/kaka-demo/release' component={Release} />
            <Route path='/kaka-demo/news' component={News} />
            <Route path='/kaka-demo/mine' component={Mine}/>
          </div>
          <Route path='/gps' component={Gps}/>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
