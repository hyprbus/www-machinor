import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import spacing from './spacing';

const margin = theme('spacing', {
  normal: spacing.normal.generalSpacing,
  none: spacing.none.generalSpacing,
});

const LanguageBar = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

LanguageBar.defaultProps = {
  children: null,
  spacing: 'normal',
};

LanguageBar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  spacing: PropTypes.oneOf(['none', 'normal']),
};

export default styled(LanguageBar)`
  margin: ${margin} 0 ${margin} 0;
`;
