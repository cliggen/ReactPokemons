import styled from 'styled-components';
import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import CardAddModal from './CardAddModal';
import CardCounter from './CardCounter';
import common from '../../store/reducer';

const { removeSelectedCards,
  addCardMode, addNewCard, addCardCancel } = common.actions;

const DeleteCardButton = styled.button`
  margin: 5px 0 5px 15px;
  width: 150px;
  background: #82acdb;
  font-weight: bold;
  color: white;
  &:hover {
  background-color: #275487;
  }
`;
const AddNewCard = styled.button`
margin: 5px 0 5px 15px;
width: 150px;
background: #82acdb;
font-weight: bold;
color: white;
&:hover {
  background-color: #275487;
}
`;
const Cockpit = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.commonReducer.cards);
  const isCardCreationMode = useSelector(state => state.commonReducer.isCardCreationMode);
  const isReadOnlyMode = useSelector(state => state.commonReducer.isReadOnlyMode);

  const countCards = () => cards.length;
  const cardCreationModeOff = (
    <div className="cockpit">
      {isReadOnlyMode ? null
        : (
          <div className="cockpit-tools">
            <DeleteCardButton onClick={() => dispatch(removeSelectedCards())}>
              REMOVE SELECTED CARDS
            </DeleteCardButton>
            <AddNewCard onClick={() => dispatch(addCardMode())}>
              ADD NEW CARD
            </AddNewCard>
          </div>
        )}
      <CardCounter cardsCounter={countCards()} />
      {isCardCreationMode
        ? (
          <CardAddModal
            addNewCard={(caption, description) => dispatch(addNewCard(caption, description))}
            addCardCancel={() => dispatch(addCardCancel())}
          />
        )
        : null}
    </div>

  );
  return cardCreationModeOff;
};

export default Cockpit;
