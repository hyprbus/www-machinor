import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = props => (
  <div className={props.className} onClick={props.click} >
    {props.text}
  </div>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default styled(Button)`
  font-family: ${props => props.theme.textFont}, ${props => props.theme.fallbackFont};
  font-size: 1.5em;
  text-align: center;
  border: 1% solid  ${props => props.theme.mainColor};
  background-color: ${props => props.theme.accentColor};
  color: ${props => props.theme.mainColor};
  padding: 0 2% 0 2%;
  width: 30%;
  margin: 2% auto 0 auto;
  cursor: pointer;
`;
