import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const backgroundColor = theme('mode', {
  techno: palette.techno.accentColor2,
});

const color = theme('mode', {
  techno: palette.techno.mainColor,
});

const font = theme('mode', {
  techno: palette.techno.textFont,
});

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
  background-color: ${backgroundColor};
  color: ${color};
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
  font-family: ${font};
`;
