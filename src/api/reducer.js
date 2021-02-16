const initialState = {
  users: [],
};

const usersReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "ADD_USERS": {
      return {
        ...state,
        users: payload.users,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
