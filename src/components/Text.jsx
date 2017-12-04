import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = (props) => {
  const { text } = props;
  return (
    <p className={props.className}>
      {text}
    </p>
  );
};

Text.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(Text)`
  font-family: ${props => props.theme.textFont};
  font-size: 1em;
`;
