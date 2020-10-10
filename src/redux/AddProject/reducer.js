import {
  ADD_PROJECT_LIST,
  EDIT_LIST,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  SEARCH_PROJECT,
} from "./type";

const initialState = {
  lists: [],
  list: "",
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT_LIST:
      return Object.assign({}, state, {
        lists: state.lists.concat(action.payload),
      });

    case EDIT_LIST:
      return {
        ...state,
        list: action.payload,
      };

    case UPDATE_PROJECT:
      var lists = state.lists.map((list) => {
        if (list.projectId === state.list.projectId) {
          return {
            ...list,
            projectName: action.payload.projectName,
            clientName: action.payload.clientName,
            priority: action.payload.priority,
          };
        } else {
          return list;
        }
      });
      return {
        lists: lists,
      };

    case DELETE_PROJECT:
      return {
        ...state,
        lists: state.lists.filter((list, i) => i !== action.id),
      };

    case SEARCH_PROJECT:
      const value = action.value;
      //console.log(value);
      const filteredLists = state.lists.filter((list) => {
        return (
          list.projectName.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
      });
      return {
        ...state,
        lists: filteredLists,
      };
    default:
      return state;
  }
};

export default projectReducer;
