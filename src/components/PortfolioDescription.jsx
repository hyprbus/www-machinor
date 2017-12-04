import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  font-family: ${props => props.theme.textFont};
  font-size: 1em;
  background-color: ${props => props.theme.backgroundColorA};
  color: ${props => props.theme.mainColor};
  padding: 1% 2% 1% 2%;
  margin: 1% 0 0 0;
`;
