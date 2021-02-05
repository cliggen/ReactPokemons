import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import Card from './Card';
import common from '../../store/reducer';

const { selectCard, editCard, updateCard } = common.actions;

const CardList = () => {
  const dispatch = useDispatch();

  const cards = useSelector(state => state.commonReducer.cards);
  const isReadOnlyMode = useSelector(state => state.commonReducer.isReadOnlyMode);

  const cardsContentItems = (
    <div className="cardsContainer">
      {cards.map((item) => (
        <Card
          singleCard="false"
          cardContent={item}
          checked={item.isChecked}
          cardEditMode={item.isEditMode}
          cardCheckBoxChange={() => dispatch(selectCard(item.id))}
          changeCardEditMode={() => dispatch(editCard(item.id))}
          updateCard={(sourceData) => dispatch(updateCard(sourceData))}
          key={item.id}
          isReadOnlyState={isReadOnlyMode}
        />
      ))}
    </div>
  );
  return cardsContentItems;
};

export default CardList;
