export const employeeReducer = (state = null, action) => {
  switch (action.type) {
    case "setEmployees":
      return action.payload;
    default:
      return state;
  }
};
