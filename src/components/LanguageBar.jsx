import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import spacing from './spacing';
import Language from './Language';

const margin = theme('spacing', {
  normal: spacing.normal.generalSpacing,
  none: spacing.none.generalSpacing,
});

const LanguageBar = (props) => {
  const lang = [{ label: 'EN', langCode: 'en' }, { label: 'FI', langCode: 'fi' }, { label: 'SV', langCode: 'sv' }];
  const languages = [];
  lang.forEach(l =>
    languages.push(<Language
      key={l.langCode}
      label={l.label}
      langCode={l.langCode}
      selected={props.selected}
      changeLanguage={props.changeLanguage}
    />));
  return (
    <div className={props.className}>
      {languages}
    </div>
  );
};

LanguageBar.defaultProps = {
  spacing: 'normal',
};

LanguageBar.propTypes = {
  className: PropTypes.string.isRequired,
  spacing: PropTypes.oneOf(['none', 'normal']),
  selected: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default styled(LanguageBar)`
  margin: ${margin} 0 ${margin} 0;
`;
