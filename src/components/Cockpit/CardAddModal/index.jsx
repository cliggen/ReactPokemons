import './index.css';

const cardAddModal = (props) => {
  const tempCard = {
    caption: 'Caption',
    description: 'Description'
  };
  const getCaption = (e) => {
    tempCard.caption = e.target.value;
  };
  const getDescription = (e) => {
    tempCard.description = e.target.value;
  };
  return (
    <div className="CardAddModal">
      <div className="inputContainer">
        <input type="text" name="caption" defaultValue="Caption" onChange={getCaption} />
        <textarea name="description" defaultValue="Description" onChange={getDescription} />
      </div>
      <div className="buttonsContainer">
        <button type="submit" onClick={() => { props.addNewCard(tempCard); }}>OK</button>
        <button type="submit" onClick={props.addCardCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default cardAddModal;
