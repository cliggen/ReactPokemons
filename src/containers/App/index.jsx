import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import CockPit from '../../components/Cockpit';
import NotFound from '../../components/NotFound';
import SignIn from '../../components/SignIn';
import Introduce from '../../components/Introduce';
import SingleCard from '../../components/SingleCard';
import Settings from '../../components/Settings';
import auth from '../../store/authReducer';

const { logIn } = auth.actions;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    if (username && password) {
      dispatch(logIn({ username, password }));
    }
    dispatch({ type: 'INITIATE_GET_CARDS' });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={Introduce} />
        <Route path="/home" exact component={CockPit} />
        <Route path="/home" exact component={CardList} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/404" exact component={NotFound} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/cards/:id" exact component={SingleCard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
