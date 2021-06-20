export function simpleFormat(num) {
  if (num < 1000) return num;
  if (num < 1000000) return (num / 1000).toFixed(1) + "K";
  if (num < 1000000000) return (num / 1000000).toFixed(1) + "M";
  return (num / 1000000000).toFixed(1) + "B";
}
const formatter = new Intl.NumberFormat();
export function format(num) {
  return formatter.format(num);
}
