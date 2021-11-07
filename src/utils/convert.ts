import BigNumber from 'bignumber.js';

const DECIMAL = new BigNumber(10).pow(18);

export const fromBigNumber = (number: number) => {
  const raw = number.toString() || 0;
  const value = new BigNumber(raw).div(DECIMAL).toString();
  return Number(value).toFixed(3);
};

export const toBigNumber = (number: string) => {
  const amountString = DECIMAL.times(number)
    .toNumber()
    .toLocaleString('fullwide', { useGrouping: false });
  const value = new BigNumber(amountString)
    .toNumber()
    .toLocaleString('fullwide', { useGrouping: false });
  return value;
};
