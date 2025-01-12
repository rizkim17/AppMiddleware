const dataUser = ["Andi", "Bob", "Ciro"];

const getUser = () => {
  return dataUser;
};

const getUserByIndex = (id) => {
  if (id < dataUser.length + 1) {
    return dataUser[id - 1];
  }
  return "Index is greater than Array Length";
};

const deleteUser = (id) => {
  if (id >= 0 && id < dataUser.length) {
    dataUser.splice(id, 1);
    return dataUser;
  }
  return "Invalid Index";
}

module.exports = { getUser, getUserByIndex, deleteUser };
