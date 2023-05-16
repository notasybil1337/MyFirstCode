// An example of working with asynchronous functions and error handling:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function getUserData(userId) {
  const apiUrl = `https://api.example.com/users/${userId}`;

  fetchData(apiUrl)
    .then(user => {
      console.log('User data:', user);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}
