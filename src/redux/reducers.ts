import {
  // SET_PROJECT_ID,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
} from "./actions";
import { ProjectData } from "../interfaces";
import { ActionTypes } from "./types";

export interface AxiosErrorType {
  message: string;
  name: string;
  stack: string;
  response: { data: { id: number; message: string } };
}

interface State {
  // projectId: string;
  projectData: ProjectData | null;
  loading: boolean;
  error: AxiosErrorType | null;
  // error: Error | null;
}

const initialState: State = {
  // projectId: "",
  projectData: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    // case SET_PROJECT_ID:
    //   return {
    //     ...state,
    //     projectId: action.payload,
    //   };
    case FETCH_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projectData: action.payload,
        error: null,
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
