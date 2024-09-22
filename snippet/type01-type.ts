export {};

type MyType1 = number;
type MyType2 = {
  a: string;
  b: MyType1;
};

function myFunction(a: MyType2) {
  console.log(`a.a is ${a.a} and a.b is ${a.b}!`);
}

myFunction(0); // Error!
myFunction({ a: "Hello", b: 0 }); // OK
