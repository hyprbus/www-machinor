import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = props => (
  <div className={props.className} onClick={props.click} >
    <ButtonLabel>
      {props.text}
    </ButtonLabel>
  </div>
);

const ButtonLabel = styled.div`
  display: inline;
  font-size: 1.5em;
  text-align: center;
  background-color: ${props => props.theme.accentColor2};
  color: ${props => props.theme.mainColor};
  padding: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default styled(Button)`
  font-family: ${props => props.theme.textFont}, ${props => props.theme.fallbackFont};
`;
