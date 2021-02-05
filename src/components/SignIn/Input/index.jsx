import React from 'react';
import './index.css';
import classNames from 'classnames';

const input = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    {props.validity === 'false'
      ? <input {...props} className="form-input" />
      : <input {...props} className={classNames('form-input', 'form-input-valid')} />}
  </div>
);

export default input;
