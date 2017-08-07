import _ from "lodash";

const initialState = { searchQuery: "", images: [] };

export default (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch(action.type) {
    case "USER_REGISTER":

      break;
    case "USER_LOGIN":

      break;
    case "USER_LOGOUT":

      break;
    default:
      break;
  }

  return newState;
};