import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import Unit from 'routes/CountryCity/components/Unit';
import styles from './styles';

const Group = ({
  cities,
  country,
  classes,
}) => (
  <div className={classes.groupWrapper}>
    <div className={classes.country}>
      <Unit unit={country} unitType="country" />
    </div>
    <div className={classes.cities}>
      {
        cities.map(city => <Unit unit={city} key={city.id} unitType="city" />)
      }
    </div>
  </div>
);

Group.propTypes = {
  cities: PropTypes.array.isRequired,
  country: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(Group);
