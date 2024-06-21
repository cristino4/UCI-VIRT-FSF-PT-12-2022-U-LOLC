fetch('https://api.github.com/gists/public')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
