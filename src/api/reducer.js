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
    case "NEW_USER": {
      return {
        ...state,
        users: [...state.users, payload.newUser],
      };
    }
    case "REMOVE_USER": {
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload.idUser),
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
