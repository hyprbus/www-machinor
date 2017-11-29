import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PortfolioHeader = (props) => {
  const { text } = props;
  return (
    <p className={props.className}>
      {text}
    </p>
  );
};

PortfolioHeader.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(PortfolioHeader)`
  font-family: ${props => props.theme.headerFont}, ${props => props.theme.headerFallbackFont};
  font-size: 1.5em;
  text-align: center;
  background-color: ${props => props.theme.backgroundColorA};
  color: ${props => props.theme.mainColor};
  padding: 1% 2% 1% 2%;
  margin: 0 0 .5em 0;
`;
