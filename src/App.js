import React from 'react'
import { Main, Header } from './components'
import { Home, CardPage } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App(){
    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/albums" component={Main} />
          <Route path="/albums/:id" component={CardPage} />
        </Switch>
      </>
    );
  
  };

export default App
