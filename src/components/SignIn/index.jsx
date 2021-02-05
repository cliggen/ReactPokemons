import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import { useDispatch } from 'react-redux';
import Input from './Input';
import auth from '../../store/authReducer';

const { logIn } = auth.actions;

const SignIn = () => {
  const history = useHistory();
  const username = document.getElementById('input-username');
  const password = document.getElementById('input-password');
  const dispatch = useDispatch();
  const [formState, formStateSet] = useState({
    username: {
      // eslint-disable-next-line no-useless-escape
      validationPattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      isValid: false
    },
    password: {
      // eslint-disable-next-line no-useless-escape
      validationPattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      isValid: false
    }
  });
  // onChange inputs handler
  const change = (event) => {
    const source = event.target.id.split('-')[1];
    const sourceValue = event.target.value;
    const isValidInput = formState[source].validationPattern.test(sourceValue);
    formStateSet({ ...formState,
      [source]: {
        ...formState[source],
        isValid: isValidInput,
      } });
  };
  // button condition being enabled/disabled
  const isValidForm = () => !!(formState.username.isValid && formState.password.isValid);
  return (
    <div className="sign-in">
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <Input
              type="text"
              placeholder="Enter username here"
              label="USERNAME"
              id="input-username"
              validity={formState.username.isValid.toString()}
              onChange={change}
            />
            <Input
              type="password"
              placeholder="Enter password here"
              label="PASSWORD"
              id="input-password"
              onChange={change}
              validity={formState.password.isValid.toString()}
            />
            <button disabled={!isValidForm()} type="button" onClick={() => { dispatch(logIn({ username: username.value, password: password.value })); history.push('/home'); }} className="login-button"> Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
