function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (!isNaN(salaries[key]) && salaries[key] !== Infinity && typeof salaries[key] == 'number' && salaries[key] !== -Infinity) {
      console.log(salaries[key]);
      sum += salaries[key];
    }
  }
  return sum;
}
