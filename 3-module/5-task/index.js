function getMinMax(str) {
  let arr = str.split(' ').filter(item => Number(item));
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return {min: min, max: max, };
}
