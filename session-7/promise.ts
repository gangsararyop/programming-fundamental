const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = false;

    if (isSuccess) {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 3000);
});

const withoutAsyncAwait = () => {
  console.log("Pekerjaan 1");

  tryPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Proses selesai"));

  console.log("Pekerjaan 2");
};

// withoutAsyncAwait();

const asyncAwait = async () => {
  console.log("Pekerjaan 1a");

  await tryPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Proses selesai"));

  console.log("Pekerjaan 2a");
};

// asyncAwait();

const asyncAwaitCara2 = async () => {
  try {
    const res = await tryPromise;

    console.log("Masuk kesini : ", res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proses selesai");
  }
};

// asyncAwaitCara2();

const asyncAwaitThrow = async () => {
  try {
    // throw "Sengaja error"; // Cara Pertama

    throw new Error("Sengajar Error 2");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proses selesai");
  }
};

asyncAwaitThrow();

// Real Case
// const fetchData = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       console.log(res.json());
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("proses selesai");
//     });
// };

// fetchData();
