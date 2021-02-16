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

export { addUsersAction, addNewUserAction };
