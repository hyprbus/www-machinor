import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const accentStandard = theme('mode', {
  techno: palette.techno.accentStandard,
});

const headerFont = theme('mode', {
  techno: palette.techno.headerFont,
});

const Heading = props => (
  <h1 className={props.className}>
    {props.text}
  </h1>
);

Heading.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(Heading)`
  font-family: ${headerFont};
  color: ${accentStandard};
  font-size: 1em;
  font-weight: bold;
`;
