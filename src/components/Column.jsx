// layout column, takes as much space of the row as it can

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styled-theming';
import { palette, responsivityA } from './appSettings';
import { spacing } from './spacing';

const backgroundColor = theme('mode', {
  techno: palette.techno.backgroundColorB,
});

const color = theme('mode', {
  techno: palette.techno.mainColor,
});

const breakpointComputer = theme('responsivity', {
  responsivityA: responsivityA.breakpointComputer,
});

const breakpointPhone = theme('responsivity', {
  responsivityA: responsivityA.breakpointPhone,
});

const margin = theme('spacing', {
  normal: spacing.normal.columnMargin,
  none: spacing.none.columnMargin,
});

const padding = theme('spacing', {
  normal: spacing.normal.columnPadding,
  none: spacing.none.columnPadding,
});

const Column = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

Column.defaultProps = {
  children: null,
  small: false,
};

Column.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  small: PropTypes.bool,

};

export default styled(Column)`
  flex: 1;
  background-color: ${backgroundColor};
  color: ${color};
  margin: ${margin};
  padding: ${padding};   
  ${props => props.small && css`
  @media screen and (min-width: ${breakpointComputer}px) {
    min-width: 22%;
    max-width: 25%;
  }
  @media screen and (min-width: ${breakpointPhone + 1}px) and (max-width: ${breakpointComputer - 1}px) {
    min-width: 30%;
    max-width: 33%;
  }
  `}
  }
`;
