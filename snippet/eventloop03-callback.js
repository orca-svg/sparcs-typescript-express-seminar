console.log("1");

setTimeout(() => {
  console.log("2");

  setTimeout(() => {
    console.log("3");

    setTimeout(() => {
      console.log("4");
    }, 1000);
  }, 1000);
}, 1000);
