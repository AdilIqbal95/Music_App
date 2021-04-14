import React from 'react'
import { Header } from './components'
import { Home, CardPage, Albums, Error } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App(){
    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route path="/albums/:id" component={CardPage} />
          <Route path="/" component={Error} />
        </Switch>
      </>
    );
  
  };

export default App
