import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UseService";
import { loginReqType } from "../../types";
import { push } from 'connected-react-router';

interface AuthState {
    token: string | null;
    loading: boolean;
    error: Error | null;
}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null,
};

const prefix = "my-books/auth"

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix})

const reducer = handleActions<AuthState, string>({
    PENDIND: (state) => ({
        ...state,
        loading: true,
        error: null,
    }),
    SUCCESS: (state, action) => ({
        token: action.payload,
        loading: false,
        error: null,
    }),
    FAIL: (state, action: any) => ({
        ...state,
        loading: false,
        error: action.payload,
    })
}, initialState, {prefix});

export default reducer

// saga
export const {login, logout} = createActions("LOGIN", "LOGOUT", {prefix});

function* loginSaga(action: Action<loginReqType>) {
    try {
        yield put(pending());
        const token: string = yield call(UserService.login, action.payload)
        // localstorage
        TokenService.set(token);
        yield put(success(token));
        // push -> login정상적으로 되면 sigin page에서 list page로 이동.
        yield put(push('/'))
    } catch (error) {
        yield put(fail(new Error("UNKOWN_ERROR")))
    }
}

function* logoutSaga() {
    
}

export function* authSaga() {
    yield takeEvery(`${prefix}/LOGIN`, loginSaga); // effect >> 먼지 모르겠음.
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}