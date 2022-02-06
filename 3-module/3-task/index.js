function camelize(str) {
  let arr = str.split('-');
  let newArr = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
  let sumArr = newArr.join('');
  return sumArr;
}
