// layout column, takes as much space of the row as it can

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styled-theming';
import { palette, responsive } from './appSettings';
import spacing from './spacing';

const backgroundColor = theme.variants('mode', 'kind', {
  default: {
    techno: palette.techno.backgroundStandard,
    mono: palette.mono.backgroundStandard,
  },
  complement: {
    techno: palette.techno.backgroundComplement,
    mono: palette.mono.backgroundAlternate,
  },
  fx: {
    techno: palette.techno.accentComplement,
    mono: palette.mono.backgroundAlternate,
  },
});

const color = theme('mode', {
  techno: palette.techno.colorStandard,
  mono: palette.mono.colorStandard,
});

const breakpointComputer = theme('responsivity', {
  responsivityA: responsive.responsivityA.breakpointComputer,
});

const breakpointPhone = theme('responsivity', {
  responsivityA: responsive.responsivityA.breakpointPhone,
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

Column.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  small: PropTypes.bool,
  tablet: PropTypes.bool,
  spacing: PropTypes.oneOf(['none', 'normal']),
  kind: PropTypes.oneOf(['default', 'complement', 'fx']),
};

Column.defaultProps = {
  children: null,
  small: false,
  tablet: false,
  spacing: 'normal',
  kind: 'default',
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
    @media screen and (min-width: ${breakpointPhone}px) and (max-width: ${breakpointComputer}px) {
      min-width: 30%;
      max-width: 33%;
    }
  `}
  ${props => props.tablet && css`
  @media screen and (max-width: ${breakpointComputer}px) {
    min-width: 100%;
  }
`}
`;
