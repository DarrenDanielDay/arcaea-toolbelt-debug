export const inferRange = (value: number, digit: number, round: boolean): [number, number] => {
  const int = Math.floor(value * 10 ** digit);
  const padded = int * 10;
  const base = 10 ** (digit + 1);
  const min = padded - (round ? 5 : 0),
    max = padded + (round ? 5 : 9);
  return [min / base, max / base];
};

export const isInt = (value: number) => value === Math.floor(value);