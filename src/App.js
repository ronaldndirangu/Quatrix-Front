import React from 'react';
import Nav from './components/Nav';
// import { Switch, Route } from 'react-router-dom';

function App () {
  return (
    <div className='App'>
      <Nav />
      App
      {/* <div>
        <Navbar />
      </div>
      <div className='container'>
        <div className='side'>
          <Sidebar />
        </div>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/artists' component={Artists} />
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/songs' component={Songs} />
          </Switch>
        </div>
      </div> */}
    </div>
  );
}

export default App;
