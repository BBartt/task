import { ProjectData } from "../interfaces";
import { AxiosErrorType } from "./reducers";

// actions.js
export const SET_PROJECT_ID = "SET_PROJECT_ID";
export const FETCH_PROJECT_REQUEST = "FETCH_PROJECT_REQUEST";
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";

export const setProjectId = (projectId: string) => ({
  type: SET_PROJECT_ID,
  payload: projectId,
});

// export const fetchProjectRequest = () => ({
//   type: FETCH_PROJECT_REQUEST,
// });
export const fetchProjectRequest = (projectId?: string) => ({
  type: FETCH_PROJECT_REQUEST,
  payload: projectId,
});

export const fetchProjectSuccess = (data: ProjectData) => ({
  type: FETCH_PROJECT_SUCCESS,
  payload: data,
});

// export const fetchProjectFailure = (error: Error) => ({
export const fetchProjectFailure = (error: AxiosErrorType) => ({
  type: FETCH_PROJECT_FAILURE,
  payload: error,
});
