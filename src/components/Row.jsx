import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

Row.defaultProps = {
  children: null,
};

Row.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(Row)`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: block;
}
`;
