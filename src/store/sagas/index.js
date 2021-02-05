import { takeEvery } from 'redux-saga/effects';
import request from './request';

export default function* watchRequest() {
  yield takeEvery('INITIATE_GET_CARDS', request);
}
