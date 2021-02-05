/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const common = createSlice({
  name: 'commonReducer',
  initialState: {
    cards: [],
    isReadOnlyMode: false,
    isCardCreationMode: false,
    selectedCardId: null },
  reducers: {
    getCards(state, action) {
      state.cards = action.payload;
    },
    selectCard(state, action) {
      const currIdx = state.cards.findIndex((card) => card.id === action.payload);
      const cardsTemp = [...state.cards];
      cardsTemp[currIdx].isChecked = !cardsTemp[currIdx].isChecked;
      state.cards = [...cardsTemp];
    },
    editCard(state, action) {
      const currIdx = state.cards.findIndex((card) => card.id === action.payload);
      const cardsTemp = [...state.cards];
      cardsTemp[currIdx].isEditMode = !cardsTemp[currIdx].isEditMode;
      state.cards = [...cardsTemp];
    },
    updateCard(state, action) {
      const idx = action.payload.id;
      const cardsTemp = [...state.cards];
      const currIdx = cardsTemp.findIndex((city) => city.id === idx);
      cardsTemp[currIdx] = action.payload;
      state.cards = [...cardsTemp];
    },
    switchReadOnlyMode(state) {
      state.isReadOnlyMode = !state.isReadOnlyMode;
    },
    removeSelectedCards(state) {
      const tempCards = [...state.cards];
      const notRemovedCards = tempCards.filter(card => !card.isChecked);
      state.cards = notRemovedCards;
    },
    addNewCard(state, action) {
      const newCard = {
        id: uuidv4(),
        isChecked: false,
        isEditMode: false,
        name: action.payload.caption,
        description: action.payload.description
      };
      const tempCards = [...state.cards];
      tempCards.push(newCard);
      state.cards = tempCards;
      state.isCardCreationMode = false;
    },
    addCardMode(state) {
      state.isCardCreationMode = !state.isCardCreationMode;
    },
    addCardCancel(state) {
      state.isCardCreationMode = false;
    }
  }
});

export default common;
export const commonReducer = common.reducer;
