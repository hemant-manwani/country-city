import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const ButtonWithIcon = ({
  size,
  text,
  color,
  classes,
  variant,
  onClick,
  iconName,
  textFirst,
  iconFirst,
  iconClass,
  textClass,
  buttonClass,
  containerClass,
}) => (
  <div className={classNames(classes.containerClass, containerClass)}>
    <Button
      size={size}
      color={color}
      onClick={onClick}
      variant={variant}
      className={classNames(classes.button, buttonClass)}
    >
      {
        textFirst
          ? (
            <div className={classNames(classes.text, textClass)}>
              { text }
            </div>
          )
          : null
      }
      {
        iconName
          ? (
            <Icon
              className={classNames(classes.icon, iconClass)}
            >
              {iconName}
            </Icon>
          )
          : null
      }
      {
        iconFirst
          ? (
            <div className={classNames(classes.text, textClass)}>
              { text }
            </div>
          )
          : null
      }
    </Button>
  </div>
);

ButtonWithIcon.defaultProps = {
  textFirst: true,
};

ButtonWithIcon.propTypes = {
  iconName: PropTypes.string,
  iconClass: PropTypes.string,
  textClass: PropTypes.string,
  buttonClass: PropTypes.string,
  containerClass: PropTypes.string,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(ButtonWithIcon);
