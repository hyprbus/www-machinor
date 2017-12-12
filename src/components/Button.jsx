import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const backgroundColor = theme('mode', {
  techno: palette.techno.accentComplement,
  mono: palette.mono.accentComplement,
});

const color = theme('mode', {
  techno: palette.techno.colorStandard,
  mono: palette.techno.colorStandard,
});

const font = theme('mode', {
  techno: palette.techno.textFont,
  mono: palette.mono.textFont,
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
