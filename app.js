const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: status: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
    disPlayUserList(users);
  } catch (error) {
    console.log("Fetch Error: ", error);
  }
};

const disPlayUserList = (users) => {
  const usersList = document.getElementById("usersList");

  users.forEach((user) => {
    const userElement = document.createElement("li");
    userElement.textContent = user.name;
    userElement.addEventListener("click", () => disPlayUserDetails(user));
    usersList.appendChild(userElement);
  });
};

const disPlayUserDetails = (user) => {
  const userDetails = document.getElementById("userDetails");
  userDetails.innerHTML = `Name: ${user.name}<br>Email: ${user.email}<br>Address: ${user.address.street}, ${user.address.city}<br>Phone: ${user.phone}<br>`;
};

fetchUsers();
