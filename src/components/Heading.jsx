import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = props => (
  <h1 className={props.className}>
    {`<${props.text}>`}
  </h1>
);

Heading.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(Heading)`
  font-family: ${props => props.theme.headerFont}, ${props => props.theme.headerFallbackFont};
  color: ${props => props.theme.accentColor};
  font-size: 1em;
  font-weight: bold;
`;
