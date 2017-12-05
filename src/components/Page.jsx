import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import { palette, responsive } from './appSettings';

const backgroundColor = theme('mode', {
  techno: palette.techno.bodyColor,
});

const maxWidth = theme('responsivity', {
  responsivityA: responsive.responsivityA.maxWidth,
});

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
  max-width: ${maxWidth};
  margin: auto;
  background-color: ${backgroundColor};
`;
