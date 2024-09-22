console.log("1");

setTimeout(() => {
  console.log("2");
}, 2000);

const start = Date.now();
while (Date.now() - start < 4000) {
  // 4초 대기
}

console.log("3");
