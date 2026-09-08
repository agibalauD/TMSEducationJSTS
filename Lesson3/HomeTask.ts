for (let count = 100, step = 1; ; count -= step++) {
  if (count < 0) {
    console.log(0);
    break;
  }

  console.log(count);
}
