import * as actionTypes from "../actions";

const initialState = {
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: "Benjamin",
          age: Math.floor(Math.random() * 40),
        }),
      };
    case actionTypes.DELETE:
      const updatedArray = state.persons.filter(
        (person) => person.id !== action.resultElId
      );
      return {
        ...state,
        persons: updatedArray,
      };
    default:
      break;
  }
  return state;
};

export default personReducer;
