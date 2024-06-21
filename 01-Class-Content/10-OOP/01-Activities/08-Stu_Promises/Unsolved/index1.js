x = 5

const getTemperature = () => {
    new Promise((resolve, reject) => {
      if (typeof x === "number") {
        reject(console.log('this is not a number'));
      }
      resolve(console.log('this is a number'));
    })
  };

getTemperature()