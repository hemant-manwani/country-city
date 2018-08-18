import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import { Api } from 'Service';

import * as CountryCityTypes from 'Redux/Types/CountryCityTypes';
import * as CountryCityActions from 'Redux/Actions/CountryCityActions';

function* getCountryCities({ payload }) {
  try {
    const response = yield call(
      Api.getCountryCities, payload
    );
    const { Location } = response;
    yield put(CountryCityActions.getCountryCitiesSucceeded(Location));
  } catch (err) {
    yield put(CountryCityActions.getCountryCitiesFailed(err));
  }
}

export default function* countryCitySaga() {
  yield takeLatest(CountryCityTypes.GET_COUNTRY_CITY, getCountryCities);
}
