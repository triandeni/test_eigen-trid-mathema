function reverseString(str) {
  var splitString = str.split('');
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join('');
  return joinArray;
}
console.log(reverseString('NEGIE1'));

function findLongestWord(str) {
  var strSplit = str.split(' ');

  var longes = strSplit.sort(function (a, b) {
    return b.length - a.length;
  });

  console.log(longes[0].length);
}
findLongestWord('Saya sangat senang mengerjakan soal algoritma');

function onlyInFirst(first, second) {
  let newArr = [];

  for (let i = 0; i < first.length; i++) {
    if (second === first) {
      newArr.push[i];
    }
  }
  console.log(newArr);
}

onlyInFirst(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']);

Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(Matrix[0][0]);
