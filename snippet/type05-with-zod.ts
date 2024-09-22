import * as readline from "readline";
import { z } from "zod";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mySchema = z.object({
  a: z.number(),
  b: z.string(),
});

rl.question("MyType 타입의 JSON 입력: ", (json) => {
  const obj = JSON.parse(json);
  const objSafe = mySchema.parse(obj);

  console.log(objSafe.a * 2);
});
