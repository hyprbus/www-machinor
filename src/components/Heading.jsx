import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const headerFont = theme('mode', {
  techno: palette.techno.headerFont,
  mono: palette.mono.headerFont,
});

const Heading = props => (
  <h1 className={props.className}>
    {props.text}
  </h1>
);

Heading.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  large: PropTypes.bool,
};

Heading.defaultProps = {
  align: 'left',
  large: false,
};

export default styled(Heading)`
  font-family: ${headerFont};
  font-size: 1em;
  margin: 0 0 .3em 0;
  ${props => props.large && css`
    font-size: 1.5em;
    margin: .5em 0 0 0;
  `}
  font-weight: bold;
  text-align: ${props => props.align};

`;
