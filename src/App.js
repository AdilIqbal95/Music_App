import React from 'react'
import { Main, Header } from './components'
import { Home, CardPage, Error } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import data from './data'

function App(){
    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Main} />
          <Route path="/albums/:id/" component={CardPage} />
          <Route path="/" component={Error} />
        </Switch>
      </>
    );
  
  };

export default App
