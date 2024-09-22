// setTimeout을 Promise로 래핑한 함수
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("1");

timeout(1000).then(() => {
  console.log("2");
  return timeout(1000); // 다음 타이머를 위해 Promise를 반환
}).then(() => {
  console.log("3");
  return timeout(1000); // 다음 타이머를 위해 Promise를 반환
}).then(() => {
  console.log("4");
});
