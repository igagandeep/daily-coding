const obj = {
    values: [1, 2, 3],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => ({
          value: this.values[index],
          done: index++ >= this.values.length
        })
      };
    }
  };
  for (let val of obj) {
    console.log(val); // 1, 2, 3
  }
  