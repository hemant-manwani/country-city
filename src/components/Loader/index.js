import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

const Loader = ({
  size,
  color,
  classes,
  customClass,
}) => (
  <div className={classes.loader}>
    <CircularProgress
      size={size}
      color={color}
      className={classnames(classes.progress, customClass)}
    />
  </div>
);

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  customClass: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(Loader);
