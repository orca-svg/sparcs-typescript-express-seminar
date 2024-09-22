export {};

interface MyType1 {
  a: string;
}
interface MyType1 {
  b: number;
}
interface MyType2 extends MyType1 {
  c: boolean;
}

function myFunction(a: MyType2) {
  console.log(`a.a is ${a.a}, a.b is ${a.b} and a.c is ${a.c}!`);
}

myFunction({ a: "Hello", b: 42, c: true });
