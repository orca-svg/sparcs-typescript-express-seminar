import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type MyType = {
  a: number;
  b: string;
};

rl.question("MyType 타입의 JSON 입력: ", (json) => {
  const obj = JSON.parse(json);
  const objSafe = obj as MyType;

  console.log(objSafe.a * 2); // Is objSafe.a really a number?
});
