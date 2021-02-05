import './index.css';
import { BsPencil } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

const cardCaption = (props) => {
  const {
    caption,
    cardEditMode,
    changeCardEditMode,
    checked,
    cardCheckBoxChange,
    updateCard,
    bufferCardContent,
    isReadOnlyState,
    singleCard
  } = props;

  // ReadOnlyState dependent tools panel
  const toolsVisible = isReadOnlyState ? (
    <div className="editTools">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={cardCheckBoxChange}
        className="selectCheckBox"
      />
    </div>
  ) : (
    <div className="editTools">
      <BsPencil
        className="edit"
        onClick={changeCardEditMode}
        style={{
          color: 'black',
          border: '1px solid white',
          borderRadius: '3px',
          backgroundColor: 'white',
        }}
      />
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={cardCheckBoxChange}
        className="selectCheckBox"
      />
    </div>
  );
  const singleCardTools = (
    <div className="editTools">
      <BsPencil
        className="edit"
        onClick={changeCardEditMode}
        style={{
          color: 'black',
          border: '1px solid white',
          borderRadius: '3px',
          backgroundColor: 'white',
        }}
      />
    </div>
  );

  const editModeCardCaption = (
    <div className="CardCaption">
      <h4>{caption}</h4>
      {singleCard === 'true' && !isReadOnlyState ? singleCardTools : null }
      {singleCard === 'false' && !isReadOnlyState ? toolsVisible : null}
    </div>
  );

  const viewModeCardCaption = (
    <div className="CardCaption">
      <textarea
        defaultValue={caption}
        spellCheck="false"
        className="captionEdit"
        name="name"
        onChange={props.getCurrentValue}
      />
      <div className="editTools">
        <BiSave
          className="edit"
          style={{
            color: 'green',
            border: '1px solid white',
            borderRadius: '3px',
            backgroundColor: 'white',
          }}
          onClick={() => {
            updateCard(bufferCardContent);
            changeCardEditMode();
          }}
        />
        <RiCloseLine
          className="edit"
          onClick={changeCardEditMode}
          style={{
            color: 'red',
            border: '1px solid white',
            borderRadius: '3px',
            backgroundColor: 'white',
          }}
        />
      </div>
    </div>
  );

  return cardEditMode && !props.isReadOnlyState
    ? viewModeCardCaption
    : editModeCardCaption;
};

export default cardCaption;
