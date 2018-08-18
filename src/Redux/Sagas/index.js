import { fork } from 'redux-saga/effects';

import countryCity from './countryCity';


export default function* rootSaga() {
  yield [
    fork(countryCity),
  ];
}
