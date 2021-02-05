import { put } from 'redux-saga/effects';
import axios from 'axios';
import commonReducer from '../reducer';

const { getCards } = commonReducer.actions;

export default function* getData() {
  try {
    const resp = yield axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
    const formattedData = yield resp.data.splice(0, 15).map(item => ({
      id: item.Number,
      name: item.Name,
      description: item.About,
      isChecked: false,
      isEditMode: false,
    }));
    yield put(getCards(formattedData));
  // eslint-disable-next-line no-console
  } catch (e) { console.log(e); }
}
