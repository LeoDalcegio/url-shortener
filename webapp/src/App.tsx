import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './reset.css';
import { GlobalStyles } from './styles/globalStyles';

import Header from './components/Header';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
