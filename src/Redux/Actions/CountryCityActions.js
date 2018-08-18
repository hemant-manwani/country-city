import { createAction } from 'redux-actions';
import {
  GET_COUNTRY_CITY,
  GET_COUNTRY_CITY_FAILED,
  GET_COUNTRY_CITY_SUCCEEDED
} from 'Redux/Types/CountryCityTypes';

export const getCountryCities = createAction(GET_COUNTRY_CITY);
export const getCountryCitiesFailed = createAction(GET_COUNTRY_CITY_FAILED);
export const getCountryCitiesSucceeded = createAction(GET_COUNTRY_CITY_SUCCEEDED);
