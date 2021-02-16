const addUsersAction = (data) => ({
  type: "ADD_USERS",
  payload: {
    users: data,
  },
});

export { addUsersAction };
