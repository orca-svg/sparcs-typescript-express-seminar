// setTimeout을 Promise로 래핑한 함수
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function execute() {
  console.log("1");

  await timeout(1000);
  console.log("2");

  await timeout(1000);
  console.log("3");

  await timeout(1000);
  console.log("4");
}

// 비동기 함수 실행
execute();
