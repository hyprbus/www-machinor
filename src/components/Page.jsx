import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Page = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(Page)`
  max-width: 1200px;
  margin: auto;
  background-color: ${props => props.theme.backgroundColorA};
`;
