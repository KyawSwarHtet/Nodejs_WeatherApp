// callback
function sum(a, b, callback, error) {
  setTimeout(() => {
    if (typeof a === "number" && typeof b === "number") {
      let result = a + b;
      callback(result);
    } else {
      let message = "a and b must be number";
      error(message);
    }
  }, 1000);
}

// Promise

function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      let result = a + b;
      resolve(result);
    } else {
      let message = "a and b must be number";
      reject(message);
    }
  });
}

function showResult() {
  let total = add(5, 6);
  console.log("total is :" + total);
}

showResult();

// add(3, 5)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// sum(
//   2,
//   "string",
//   (result) => {
//     console.log(result);
//   },
//   (message) => {
//     console.log(message);
//   }
// );
