// layout column, takes as much space of the row as it can

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

Column.defaultProps = {
  children: null,
};

Column.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(Column)`
  flex: 1;
  background-color: ${props => props.theme.backgroundColorB};
  color: ${props => props.theme.mainColor};
  margin: ${props => props.theme.columnMargin};
  padding: ${props => props.theme.columnPadding};
`;
