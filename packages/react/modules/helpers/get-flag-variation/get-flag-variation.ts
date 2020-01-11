import { FlagName, FlagVariation, Flags } from '@flopflip/types';
import warning from 'tiny-warning';
import { DEFAULT_FLAG_PROP_KEY } from '../../constants';
import getNormalizedFlagName from '../get-normalized-flag-name';

const isNil = (value: any): boolean => value === undefined || value === null;

const getFlagVariation = (
  flagName: FlagName = DEFAULT_FLAG_PROP_KEY
): ((flags: Flags) => FlagVariation) => {
  const normalizedFlagName = getNormalizedFlagName(flagName);

  warning(
    normalizedFlagName === flagName,
    '@flopflip/react: passed flag name does not seem to be normalized which may result in unexpected toggling. Please refer to our readme for more information: https://github.com/tdeekens/flopflip#flag-normalization'
  );

  return flags => {
    const flagVariation = flags[normalizedFlagName];

    return isNil(flagVariation) ? false : flagVariation;
  };
};

export default getFlagVariation;