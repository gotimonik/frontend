import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.global.scss';
import Practices from './components/Practices';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <h1>Hello World</h1>} />
        <Route exact path="/practices" component={Practices} />
        <Route path="*" render={() => <h1>Invalid url</h1>} />
      </Switch>
    </BrowserRouter>
  );
}