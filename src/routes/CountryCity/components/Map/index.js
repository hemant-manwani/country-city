import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, withState, lifecycle, withHandlers
} from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import { aggregateUnits } from 'Utils';
import Unit from 'routes/CountryCity/components/Unit';
import Group from 'routes/CountryCity/components/Group';
import styles from './styles';

const GroupComponent = ({
  group,
  classes,
}) => (
  <div className={classes.group}>
    {
     group.childrens
       ? <Group country={group} cities={group.childrens} />
       : <Unit unit={group} unitType="city" />
   }
  </div>
);

const Map = ({
  classes,
  cityGroups,
}) => (
  <div className={classes.mapWrapper}>
    <div className={classes.cityMaps}>
      {
        Object.keys(cityGroups)
          .map(group => (!cityGroups[group].hasParent
            ? <GroupComponent key={group} group={cityGroups[group]} classes={classes} />
            : null)
          )
      }
    </div>
  </div>
);

Map.defaultProps = {
  countryCities: [],
};

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  countryCities: PropTypes.array.isRequired,
};

const enhancer = compose(
  withStyles(styles),
  withState('cityGroups', 'setCityGroups', {}),
  withHandlers({
    arrangeCityGroups: ({
      setCityGroups,
      countryCities,
    }) => () => {
      const aggregatedUnits = aggregateUnits(countryCities);
      setCityGroups(aggregatedUnits);
    },
  }),
  lifecycle({
    componentDidMount() {
      console.log(this.props);
      this.props.arrangeCityGroups();
    },
  })
);

export default enhancer(Map);
