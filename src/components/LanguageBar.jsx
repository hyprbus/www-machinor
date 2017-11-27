import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LanguageBar = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

LanguageBar.defaultProps = {
  children: null,
};

LanguageBar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(LanguageBar)`

`;
