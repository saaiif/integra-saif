let localState = JSON.parse(localStorage.getItem("main"));

export const initialState = localState || null;

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        studentData: action.payload,
      };
    case "ADD_STUDENT_KK":
      return {
        ...state,
        kk: action.payload,
      };

    default:
      return state;
  }
};
