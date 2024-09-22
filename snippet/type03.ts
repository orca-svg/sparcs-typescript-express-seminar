export {};

function myFunction1(a: number) {
  return a * 2;
}
function myFunction2(a: number | null) {
  return a ? a * 2 : 0;
}
function myFunction3(a: number | undefined) {
  return a ? a * 2 : 0;
}

myFunction1(null);
myFunction1(undefined);
myFunction2(null);      // OK
myFunction2(undefined);
myFunction3(null);
myFunction3(undefined); // OK
