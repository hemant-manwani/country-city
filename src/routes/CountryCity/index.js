import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Loader from 'components/Loader';
import Header from 'components/Header';
import { getCountryCities } from 'Redux/Actions/CountryCityActions';
import Map from './components/Map';

const CountryCity = ({
  countryCities,
  fetchingResults,
}) => (
  <div>
    <Header title="Country cities map" />
    {
      countryCities.length
        ? (
          <Map countryCities={countryCities} />
        )
        : null
    }
    {
      fetchingResults
        ? (
          <Loader
            size={50}
            color="primary"
          />
        )
        : null
    }
  </div>
);

CountryCity.propTypes = {
  countryCities: PropTypes.array,
  getCountryCities: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  countryCity: {
    fetching,
    countryCities,
  },
}) => ({
  countryCities,
  fetchingResults: fetching,
});

const mapDispatchToProps = {
  getCountryCities,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getCountryCities();
    },
  })
);

export default enhancer(CountryCity);
