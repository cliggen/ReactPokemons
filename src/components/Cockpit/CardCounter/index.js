import React from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
color: #fff;
background-color: #82acdb;
border-color: #82acdb;
font-size: 1rem;
border-radius: .25rem;
padding: .02rem .3rem;
display: flex;
align-items: center;
margin-left: 1rem;
height: 2.5rem;
`;
const Counter = styled.div`
color: #212529;
background-color: #f8f9fa;
display: inline-block;
padding: .25em .4em;
font-size: 75%;
font-weight: 700;
line-height: 1;
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: .25rem;
margin-left: 5px;
`;
const CardCounter = (props) => (
  <CounterContainer>
    <div>Total cards</div>
    <Counter>
      {props.cardsCounter}
    </Counter>
  </CounterContainer>

);
export default CardCounter;
