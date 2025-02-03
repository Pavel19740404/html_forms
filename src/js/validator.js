export default function controlCard(arr) {
  const controlNum = arr.pop();

  const dubledNumbers = [];
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    dubledNumbers.push(arr[i] * 2);
    arr[i] = 0;
  }

  const result = [];

  for (let i = 0; i < dubledNumbers.length; i++) {
    if (dubledNumbers[i] >= 10) {
      const splited = dubledNumbers[i].toString().split("").map(Number);
      result.push(...splited);
    } else {
      result.push(dubledNumbers[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }

  const sum = result.reduce((acc, cur) => acc + cur);
  const remainds = 10 - (sum % 10);

  return remainds === controlNum;
}
