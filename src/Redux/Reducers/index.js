import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import countryCity from './countryCity';

export default combineReducers({
  countryCity,
  router: routerReducer,
});
