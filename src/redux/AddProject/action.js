import {
  ADD_PROJECT_LIST,
  EDIT_LIST,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  SEARCH_PROJECT,
} from "./type";

export const addProjectList = (payload) => {
  return {
    type: ADD_PROJECT_LIST,
    payload: payload,
  };
};

export const editList = (payload) => {
  return {
    type: EDIT_LIST,
    payload: payload,
  };
};

export const updateProject = (payload) => {
  return {
    type: UPDATE_PROJECT,
    payload: payload,
  };
};

export const deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id: id,
  };
};

export const searchProject = (value) => {
  return {
    type: SEARCH_PROJECT,
    value: value,
  };
};
