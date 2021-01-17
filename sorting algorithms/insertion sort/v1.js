let input = [5, 2, 4, 6, 1, 3];

for (let j = 1; j < input.length; j++) {
  const key = input[j];
  let i = j - 1;

  while(i >= 0 && input[i] > key) {
    input[i + 1] = input[i];
    i = i - 1; // i = 1
  }
  console.log(input);
  input[i + 1] = key;
}

console.log(input); // [1, 2, 3, 4, 5, 6]

// ITERATIONS
// [5, 5, 4, 6, 1, 3]
// [2, 5, 5, 6, 1, 3]
// [2, 4, 5, 6, 1, 3]
// [2, 2, 4, 5, 6, 3]
// [1, 2, 4, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]
