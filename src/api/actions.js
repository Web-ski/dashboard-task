const addUsersAction = (data) => ({
  type: "ADD_USERS",
  payload: {
    users: data,
  },
});

const addNewUserAction = (data) => ({
  type: "NEW_USER",
  payload: {
    newUser: data,
  },
});

const removeUserAction = (data) => ({
  type: "REMOVE_USER",
  payload: {
    idUser: data,
  },
});

export { addUsersAction, addNewUserAction, removeUserAction };
