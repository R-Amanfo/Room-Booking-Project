function fetchAndDisplayUsers() {
    fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the received data directly
            displayUsers(data); // Call the displayUsers function to render the data on the page
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayUsers(users) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = ''; // Clear previous data

    const userList = document.createElement('ul');
    
    // Iterate through each user and create list items to display their data
    users.forEach(user => {
        const listItem = document.createElement('li');
        //ID is the default row id added by sqlite.
        listItem.textContent = `Index: ${user.index},UserID: ${user.userId}, Username: ${user.username}, Email: ${user.email}, PW: ${user.password}`;
        userList.appendChild(listItem);
    });

    
    // Append the list of users to the userDataDiv
    userDataDiv.appendChild(userList);
}



const addUser = async (username, email) => {
  try {
    const response = await fetch('http://localhost:3001/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};