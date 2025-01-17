import type { TFlagsChange, TAdapterIdentifiers } from '@flopflip/types';

export type TUpdateFlagsAction = {
  type: string;
  payload: TFlagsChange & {
    adapterIdentifiers: TAdapterIdentifiers[];
  };
};
