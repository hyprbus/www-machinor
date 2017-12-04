import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ingress = (props) => {
  const { text } = props;
  return (
    <div className={props.className}>
      {text}
    </div>
  );
};

Ingress.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(Ingress)`
  font-family: ${props => props.theme.textFont};
  font-size: 1em;
`;
