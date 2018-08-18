import {
  GET_COUNTRY_CITY,
  GET_COUNTRY_CITY_FAILED,
  GET_COUNTRY_CITY_SUCCEEDED
} from 'Redux/Types/CountryCityTypes';

const INITIAL_STATE = {
  fetching: false,
  countryCities: [],
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case GET_COUNTRY_CITY: {
      return {
        ...state,
        fetching: true,
        countryCities: [],
      };
    }
    case GET_COUNTRY_CITY_FAILED: {
      return {
        ...state,
        fetching: false,
      };
    }
    case GET_COUNTRY_CITY_SUCCEEDED: {
      console.log(payload);
      return {
        ...state,
        fetching: false,
        countryCities: payload,
      };
    }
    default: {
      return state;
    }
  }
};
