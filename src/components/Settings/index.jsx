import styled from 'styled-components';
import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';

import common from '../../store/reducer';

const { switchReadOnlyMode } = common.actions;

const ReadOnlyModeCheckBox = styled.input`
position: absolute;
top: -10px;
left: -10px;
opacity: 0;
`;
const ReadOnlyModeCheckBoxLabel = styled.label`
margin: 5px 0 0 20px;
`;
const ReadOnlyModeCustomCheckBox = styled.span`
display: inline-block;
&::before {
  position: relative;
  top: 4px;
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${props => (props.isReadOnlyMode ? 'green' : 'red')};
  border: 2px solid black;
}
`;
const Settings = () => {
  const dispatch = useDispatch();
  const isReadOnlyMode = useSelector(state => state.commonReducer.isReadOnlyMode);
  return (
    <div className="settings">
      <ReadOnlyModeCheckBoxLabel
        htmlFor="editModeCheckBox"
        className="editModeSwitcher"
      >
        <ReadOnlyModeCheckBox
          type="checkbox"
          id="editModeCheckBox"
          name="editModeCheckBox"
          className="editModeSwitcher"
          defaultChecked={isReadOnlyMode}
          onChange={() => dispatch(switchReadOnlyMode())}
        />
        <ReadOnlyModeCustomCheckBox isReadOnlyMode={isReadOnlyMode} />
        Read-Only Mode
      </ReadOnlyModeCheckBoxLabel>
    </div>
  );
};

export default Settings;
