import { compose } from 'recompose';
import { injectFeatureToggles, ALL_FLAGS } from '@flopflip/react';
import withSubscription from './with-subscription';

export default flagNames =>
  compose(withSubscription(ALL_FLAGS), injectFeatureToggles(flagNames));
