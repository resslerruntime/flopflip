import { compose, withProps } from 'recompose';
import isNil from 'lodash.isnil';
import omitProps from '@hocs/omit-props';
import { DEFAULT_FLAG_NAME, ALL_FLAGS } from '../constants';

const injectFeatureToggle = (flagName, propKey = DEFAULT_FLAG_NAME) =>
  compose(
    withProps(props => {
      const flagValue = props[ALL_FLAGS][flagName];

      return { [propKey]: isNil(flagValue) ? false : flagValue };
    }),
    omitProps(ALL_FLAGS)
  );

export default injectFeatureToggle;
