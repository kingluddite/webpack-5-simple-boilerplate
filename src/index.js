import getClasses from "./getClasses";

console.log("ran from index.html");
getClasses();

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie" };
console.log(newObj);

// only works if we add polyfills
// includes is ES7
// it is a method
console.log(["a", "b", "c"].includes("b"));
console.log("yo");
