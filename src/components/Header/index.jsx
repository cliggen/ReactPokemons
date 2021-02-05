import './index.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import auth from '../../store/authReducer';

const { logOut } = auth.actions;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    margin: 1rem;
    background-color: #82acdb;
    &:hover {
      background-color: #275487;
    }
`;
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  const isAdmin = useSelector(state => state.authReducer.isAdmin);
  const loggedUser = useSelector(state => state.authReducer.username);
  return (
    <div className="Header">
      <p>Pokemons</p>
      {isLoggedIn ? (
        <div>
          {`Welcome, ${loggedUser}!`}
        </div>
      ) : null}
      <nav>
        <ul>
          <li><StyledLink to="/home">Home</StyledLink></li>
          <li>
            {isLoggedIn ? <StyledLink to="/home" onClick={() => { dispatch(logOut()); }}>Sign Out</StyledLink> : <StyledLink to="/signin">Sign In</StyledLink> }
          </li>
          {isAdmin ? (
            <li>
              <StyledLink to="/settings">Settings</StyledLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
