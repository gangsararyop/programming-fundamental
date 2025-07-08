const obj = {
  name: "Gangsar",
  age: 25,
  email: "gangsar@gmail.com",
};

const jsonObj = JSON.stringify(obj); // JSON

// console.log(jsonObj);

const parsedJSON = JSON.parse(jsonObj);
// console.log(parsedJSON);

export default obj;

export { jsonObj, parsedJSON };
