import { takeLatest, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import {
  FETCH_PROJECT_REQUEST,
  fetchProjectSuccess,
  fetchProjectFailure,
} from "./actions";
import { FetchProjectRequestAction } from "./types";
import { ProjectData } from "../interfaces";
import { instance } from "../axiosConfig";
import { AxiosErrorType } from "./reducers";

function* fetchProject(action: FetchProjectRequestAction) {
  try {
    const response: AxiosResponse<ProjectData> = yield call(
      instance.get,
      `/project/${action.payload}`
    );
    yield put(fetchProjectSuccess(response.data));
  } catch (error) {
    const err = error as unknown as AxiosErrorType;
    yield put(fetchProjectFailure(err));
  }
}

function* watchFetchProject() {
  yield takeLatest(FETCH_PROJECT_REQUEST, fetchProject);
}

export default function* rootSaga() {
  yield watchFetchProject();
}
