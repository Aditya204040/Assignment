import { createStore } from 'redux';

const initialState = {
  users: [],
  isAuthenticated: false,
  currentUser: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
