function stringChop(str, size) {
  // If the input string is null or empty, return an empty array
  if (str === null || str === "") return [];

  // Convert size to a number
  size = parseInt(size);

  // If size is invalid or non-positive, return empty array
  if (isNaN(size) || size <= 0) return [];

  const result = [];

  // Loop to chunk the string
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
