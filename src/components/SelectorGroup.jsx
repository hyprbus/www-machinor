import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import spacing from './spacing';
import Selector from './Selector';

const margin = theme('spacing', {
  normal: spacing.normal.selectorSpacing,
  none: spacing.none.selectorSpacing,
});

const SelectorGroup = (props) => {
  const { selectors } = props;
  const selectorGroup = [];
  selectors.forEach(l =>
    selectorGroup.push(<Selector
      key={l.selectorCode}
      label={l.label}
      selectorId={l.selectorCode}
      selected={props.selected}
      changeSelector={props.changeSelector}
    />));
  return (
    <div className={props.className}>
      {selectorGroup}
    </div>
  );
};

SelectorGroup.defaultProps = {
  spacing: 'normal',
};

SelectorGroup.propTypes = {
  className: PropTypes.string.isRequired,
  spacing: PropTypes.oneOf(['none', 'normal']),
  selected: PropTypes.string.isRequired,
  changeSelector: PropTypes.func.isRequired,
  selectors: PropTypes.arrayOf(Object).isRequired,
};

export default styled(SelectorGroup)`
  margin: 0 0 ${margin} 0;
`;
