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

    case "EDIT_STUDENT":
      const updateStudent = action.payload;
      const updateStudents = state.studentData.map((student) => {
        if (student.id === updateStudent.id) {
          return updateStudent;
        }
        return student;
      });

      return {
        ...state,
        studentData: updateStudents,
      };

    default:
      return state;
  }
};
