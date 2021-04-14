import React from 'react'
import { Header } from './components'
import { Home, CardPage, Albums } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App(){
    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/albums" component={Albums} />
          <Route path="/albums/:id" component={CardPage} />
        </Switch>
      </>
    );
  
  };

export default App
