import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import TaskContainer from './containers/TasksContainer';

function App () {
  return (
    <div className='App'>
      <Nav />
      <div>
        <Switch>
          <Route exact path='/' component={TaskContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
