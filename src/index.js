import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import createStore from 'Redux/index';
import CountryCity from 'routes/CountryCity';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

export const browserHistory = createBrowserHistory();

const store = createStore();
registerServiceWorker();

const RootView = () => (
  <Switch>
    <Route path="/" name="Root" component={CountryCity} />
    <Route path="/country-city" name="CountryCity" component={CountryCity} />
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <RootView />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
