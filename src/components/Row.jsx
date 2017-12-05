import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import { responsivityA } from './appSettings';

const breakpointPhone = theme('responsivity', {
  responsivityA: responsivityA.breakpointPhone,
});

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
  @media screen and (max-width: ${breakpointPhone}px) {
    display: block;
  }
`;
