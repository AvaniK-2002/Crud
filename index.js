// Empty user data array
const usersData = [];

// Function to render the user list
function renderUserList() {
  const userList = document.getElementById("users");
  userList.innerHTML = "";

  usersData.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.userName}</td>
      <td>${user.email}</td>
    `;

    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteUser(user.id));

    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    userList.appendChild(row);
  });
}

// Function to add a new user
function addUser(userName, email) {
  const newUser = {
    id: usersData.length + 1,
    userName,
    email,
  };

  usersData.push(newUser);
  renderUserList();
  clearForm();
}

// Function to delete a user
function deleteUser(id) {
  const index = usersData.findIndex((user) => user.id === id);

  if (index !== -1) {
    usersData.splice(index, 1);
    renderUserList();
  }
}

// Function to clear the form inputs
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

// Event listener for the form submission
document.getElementById("add-product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const userName = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (userName !== "" && email !== "") {
    addUser(userName, email);
  }

  nameInput.focus();
});
