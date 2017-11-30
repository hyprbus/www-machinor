import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SmallColumn = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

SmallColumn.defaultProps = {
  children: null,
};

SmallColumn.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(SmallColumn)`
  flex: 1;
  background-color: ${props => props.theme.backgroundColorB};
  color: ${props => props.theme.mainColor};
  margin: ${props => props.theme.columnMargin};
  padding: ${props => props.theme.columnPadding};
  @media screen and (min-width: ${props => props.theme.breakpointComputer}px) {
    min-width: 22%;
    max-width: 25%;
  }
  @media screen and (min-width: ${props => props.theme.breakpointPhone + 1}px) and (max-width: ${props => props.theme.breakpointComputer - 1}px) {
    min-width: 30%;
    max-width: 33%;
  }
`;
