import './index.css';

const cardBody = props => {
  const { cardEditMode, isReadOnlyState, description, getCurrentValue } = props;
  const cardBodyContent = (
    <div className="cardBody">
      {cardEditMode && !isReadOnlyState ? (
        <textarea defaultValue={description} spellCheck="false" name="description" onChange={getCurrentValue} />
      ) : (
        <p>{description}</p>
      ) }
    </div>
  );
  return cardBodyContent;
};

export default cardBody;
