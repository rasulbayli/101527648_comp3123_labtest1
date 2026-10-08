const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "delayed success!" });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error: delayed exception!"));
    }, 500);
  });
};

// Handle resolved promise
resolvedPromise()
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.error(error);
  });

// Handle rejected promise
rejectedPromise()
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.error({ error: error.message });
  });
