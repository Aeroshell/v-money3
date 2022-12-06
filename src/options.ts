export interface VMoneyOptions {
  debug: boolean;
  masked: boolean;
  prefix: string;
  suffix: string;
  thousands: string;
  decimal: string;
  precision: number;
  disableNegative: boolean;
  disabled: boolean;
  min: number | string | null;
  max: number | string | null;
  minAutoRound: boolean;
  maxAutoRound: boolean;
  allowBlank: boolean;
  minimumNumberOfCharacters: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelModifiers: any;
  shouldRound: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default {
  debug: false,
  masked: false,
  prefix: '',
  suffix: '',
  thousands: ',',
  decimal: '.',
  precision: 2,
  disableNegative: false,
  disabled: false,
  min: null,
  max: null,
  minAutoRound: false,
  maxAutoRound: false,
  allowBlank: false,
  minimumNumberOfCharacters: 0,
  modelModifiers: {
    number: false,
  },
  shouldRound: true,
} as VMoneyOptions;
