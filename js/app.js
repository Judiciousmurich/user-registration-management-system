let users = [];

const createForm = document.getElementById('create-form');
createForm.addEventListener('submit', addUser);

function addUser(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const idInput = document.getElementById('id');
  const countryInput = document.getElementById('country');
  const languagesInput = document.getElementById('languages');

  const name = nameInput.value;
  const id = idInput.value;
  const country = countryInput.value;
  const languages = languagesInput.value;

  // Check if any field is empty
  if (!name || !id || !country || !languages) {
    alert('Please fill in all fields');
    return;
  }

  const user = {
    name: name,
    id: id,
    country: country,
    languages: languages
  };

  users.push(user);

  nameInput.value = '';
  idInput.value = '';
  countryInput.value = '';
  languagesInput.value = '';

  displayUsers();
}

function displayUsers() {
  const usersList = document.getElementById('users-list');
  usersList.innerHTML = '';

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${user.name}</td>
      <td>${user.id}</td>
      <td>${user.country}</td>
      <td>${user.languages}</td>
      <td id="delete" onclick="deleteUser(${i})">delete</td>
    `;

    usersList.appendChild(newRow);
  }
}

function deleteUser(index) {
  users.splice(index, 1);
  displayUsers();
}

// Alert the user when a field is empty and when info is submitted
createForm.addEventListener('submit', function () {
  const nameInput = document.getElementById('name');
  const idInput = document.getElementById('id');
  const countryInput = document.getElementById('country');
  const languagesInput = document.getElementById('languages');

  if (nameInput===""|| idInput==="" || countryInput ===""|| languagesInput==="") {
    alert('Please fill in all fields');
  } else {
    alert('User information submitted successfully');
  }
});