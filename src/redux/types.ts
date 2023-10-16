import { ProjectData } from "../interfaces";
import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  SET_PROJECT_ID,
} from "./actions";
import { AxiosErrorType } from "./reducers";

export interface SetProjectIdAction {
  type: typeof SET_PROJECT_ID;
  payload: string;
}

export interface FetchProjectRequestAction {
  type: typeof FETCH_PROJECT_REQUEST;
  payload?: string;
}

export interface FetchProjectSuccessAction {
  type: typeof FETCH_PROJECT_SUCCESS;
  payload: ProjectData;
}

export interface FetchProjectFailureAction {
  type: typeof FETCH_PROJECT_FAILURE;
  payload: AxiosErrorType;
}

export type ActionTypes =
  | SetProjectIdAction
  | FetchProjectRequestAction
  | FetchProjectSuccessAction
  | FetchProjectFailureAction;
