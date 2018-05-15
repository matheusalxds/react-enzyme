import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WrapperTable from './WrapperTable';
import WrapperButton from './WrapperButton';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={'/'} exact={true} component={App} />
      <Route path={'/table'} component={WrapperTable} />
      <Route path={'/buttons'} component={WrapperButton} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
