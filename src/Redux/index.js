import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from '..';

import reducers from './Reducers';
import sagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(browserHistory);

export default () => {
  const enhancer = composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routingMiddleware
    )
  );
  const store = createStore(reducers, {}, enhancer);

  sagaMiddleware.run(sagas);

  return store;
};
