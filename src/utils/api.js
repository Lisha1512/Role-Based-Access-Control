const [users, setUsers] = useState([
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
]);

const addUser = (newUser) => {
  setUsers([...users, { id: users.length + 1, ...newUser }]);
};

const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id));
};

export { addUser, deleteUser };
