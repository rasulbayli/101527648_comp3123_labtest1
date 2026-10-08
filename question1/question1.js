const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(array) {
  return new Promise((resolve, reject) => {
    try {
      const result = array
        .filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase());

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
