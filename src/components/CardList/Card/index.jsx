/* eslint-disable react/require-default-props */
import './index.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardCaption from './CardCaption';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import common from '../../../store/reducer';

const { selectCard } = common.actions;

const Card = props => {
  const dispatch = useDispatch();
  const cardClasses = props.checked ? classNames('Card', 'checked') : 'Card';
  const {
    cardContent,
    checked,
    cardCheckBoxChange,
    cardEditMode,
    updateCard,
    changeCardEditMode,
    isReadOnlyState,
  } = props;

  // buffer obj for changing content
  const bufferCardContent = { ...props.cardContent };
  // handler of card content changing
  const getCurrentValue = (event) => {
    bufferCardContent[event.target.name] = event.target.value;
  };
  const redirectHandler = () => {
    props.history.replace(`cards/${cardContent.id}`);
    dispatch(selectCard(cardContent.id));
  };

  return (
    <div
      className={cardClasses}
      onDoubleClick={() => (!cardContent.isEditMode && props.match.url !== `/cards/${cardContent.id}` ? redirectHandler() : null)}
    >
      <CardCaption
        singleCard={props.singleCard}
        caption={cardContent.name}
        checked={checked}
        cardCheckBoxChange={cardCheckBoxChange}
        cardEditMode={cardEditMode}
        updateCard={updateCard}
        getCurrentValue={getCurrentValue}
        bufferCardContent={bufferCardContent}
        changeCardEditMode={changeCardEditMode}
        isReadOnlyState={isReadOnlyState}
      />
      <CardBody
        description={cardContent.description}
        cardEditMode={cardEditMode}
        isReadOnlyState={isReadOnlyState}
        getCurrentValue={getCurrentValue}
      />
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  cardCheckBoxChange: PropTypes.func,
  cardEditMode: PropTypes.bool,
  updateCard: PropTypes.func,
  changeCardEditMode: PropTypes.func,
  isReadOnlyState: PropTypes.bool,
  description: PropTypes.string,

  cardContent: PropTypes.shape(
    {
      id: PropTypes.string,
      isChecked: PropTypes.bool,
      isEditMode: PropTypes.bool,
      name: PropTypes.string,
      description: PropTypes.string
    }
  )
};
export default withRouter(withLoadingDelay(Card));
