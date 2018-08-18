import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Unit = ({
  unit,
  classes,
  unitType,
}) => (
  <div className={classes[unitType]}>
    <div className={classes.cityName}>
      { unit.name }
    </div>
    <div className={classes.options}>
      <div className={classes.editOptions}>...</div>
      <div className={classes.deleteOption}>X</div>
    </div>
  </div>
);

Unit.propTypes = {
  unit: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  unitType: PropTypes.string.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(Unit);
