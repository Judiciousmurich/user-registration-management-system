// Add User
const createForm = document.getElementById('create-form');
createForm.addEventListener('submit', addUser);

function addUser(event) {
  event.preventDefault();

  // Get input values
  const nameInput = document.getElementById('name');
  const idInput = document.getElementById('id');
  const countryInput = document.getElementById('country');
  const languagesInput = document.getElementById('languages');

  const name = nameInput.value;
  const id = idInput.value;
  const country = countryInput.value;
  const languages = languagesInput.value;

  // Create a new row for the user
  const table = document.getElementById('users-table');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${country}</td>
    <td>${languages}</td>
    <td id="delete" onclick="deleteUser(this)">delete</td>
  `;

  // Append the new row to the table
  const usersList = document.getElementById('users-list');
  usersList.appendChild(newRow);

  // Clear the form fields
  nameInput.value = '';
  idInput.value = '';
  countryInput.value = '';
  languagesInput.value = '';
}

// Delete User
function deleteUser(element) {
  const row = element.parentNode;
  const table = document.getElementById('users-table');
  table.removeChild(row);
}
