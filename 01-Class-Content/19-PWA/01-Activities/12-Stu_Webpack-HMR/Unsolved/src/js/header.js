export const headerClick = () => {
  const header = document.getElementById('header');
  console.log(header.style.color)
  if (header.style.color === 'orange') {
    header.style.color = 'black';
  } else {
    header.style.color = 'orange';
  }
};
// TODO: Try changing the 'blue' to 'orange' to see if hot reloading works