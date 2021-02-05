import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../CardList/Card';
import common from '../../store/reducer';

const { editCard, updateCard } = common.actions;

const SingleCard = (props) => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.commonReducer.cards);
  const isReadOnlyMode = useSelector(state => state.commonReducer.isReadOnlyMode);
  const currentCardIndex = cards.findIndex(card => card.id === props.match.params.id);
  const currentCard = cards[currentCardIndex];
  return (
    <div className="singleCard">
      <Card
        singleCard="true"
        cardContent={currentCard}
        checked={currentCard.isChecked}
        cardEditMode={currentCard.isEditMode}
        changeCardEditMode={() => dispatch(editCard(currentCard.id))}
        updateCard={(index) => dispatch(updateCard(index))}
        key={currentCard.id}
        isReadOnlyState={isReadOnlyMode}
      />
    </div>
  );
};

export default SingleCard;
