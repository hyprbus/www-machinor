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
    mono: palette.mono.backgroundStandard,
  },
  fx: {
    techno: palette.techno.accentComplement,
    mono: palette.mono.accentComplement,
  },
});

const color = theme.variants('mode', 'kind', {
  default: {
    techno: palette.techno.colorStandard,
    mono: palette.mono.colorStandard,
  },
  complement: {
    techno: palette.techno.colorComplement,
    mono: palette.mono.colorStandard,
  },
  fx: {
    techno: palette.techno.colorComplement,
    mono: palette.techno.colorComplement,
  },
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
  center: PropTypes.bool,
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
  center: false,
};

export default styled(Column)`
  flex: 1;
  ${props => props.center && css`
    align-self: center;
  `}
  background-color: ${backgroundColor};
  color: ${color};
  margin: ${margin};
  padding: ${padding};   
  ${props => props.small && css`
    @media screen and (min-width: ${breakpointComputer}px) {
      min-width: 24%;
      max-width: 24%;
    }
    @media screen and (min-width: ${breakpointPhone}px) and (max-width: ${breakpointComputer}px) {
      min-width: 32%;
      max-width: 32%;
    }
  `}
  ${props => props.tablet && css`
  @media screen and (max-width: ${breakpointComputer}px) {
    min-width: 95%;
  }
`}
`;
