// Promise resolved right away
const p1 = new Promise((resolve, reject) => {
  const time = 0;
  if (time < 0) {
    reject(new Error('Something went wrong'));
  } else {
    resolve('Resolved right away');
  }
});
console.log('Status of p1:', p1);

// Promise resolved after one second
const p2 = new Promise((resolve, reject) => {
  const time = 1000;
  if (time < 0) {
    reject(new Error('Something went wrong'));
  } else {
    setTimeout(() => {
      resolve('Resolved after 1 second');
    }, time);
  }
});
console.log('Status of p2:', p2);

// Promise resolved after three seconds
const p3 = new Promise((resolve, reject) => {
  const time = 3000;
  if (time < 0) {
    reject(new Error('Something went wrong'));
  } else {
    setTimeout(() => {
      resolve('Resolved after 3 seconds');
    }, time);
  }
});
console.log('Status of p3:', p3);
