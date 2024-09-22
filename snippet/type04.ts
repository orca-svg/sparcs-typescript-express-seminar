export {};

function myFunction1(a: any) {
  return a * 2;
}
function myFunction2(a: number) {
  return a * 2;
}

myFunction1(2);
myFunction1("2"); // Oops...

const obj = JSON.parse(`{ "a": 1 }`); // any 타입
const objSafe = obj as { a: number }; // 타입 단언

myFunction1(obj.a);
myFunction1(objSafe.a);
myFunction2(obj.a); // Oops...
myFunction2(objSafe.a);
