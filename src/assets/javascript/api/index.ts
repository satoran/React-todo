class Api {
  counter(num: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 3);
      }, 1000);
    })
  }
}


export default new Api()
