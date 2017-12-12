import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const font = theme('mode', {
  techno: palette.techno.textFont,
  mono: palette.mono.textFont,
});

const PortfolioDescription = (props) => {
  const { text } = props;
  return (
    <p className={props.className}>
      {text}
    </p>
  );
};

PortfolioDescription.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(PortfolioDescription)`
  font-family: ${font};
  font-size: 1em;
  margin: 1% 0 0 0;
`;
