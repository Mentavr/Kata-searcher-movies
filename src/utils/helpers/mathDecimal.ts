export const mathDecimal = (number: number) => {
  const [first, second] = String(number).split('.');
  const decimal = second ? Number(`${first}.${second[0]}`) : Number(first);
  return decimal;
};
