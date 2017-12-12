import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const font = theme('mode', {
  techno: palette.techno.textFont,
  mono: palette.mono.textFont,
});

const fontSize = theme('mode', {
  techno: palette.techno.textSize,
  mono: palette.mono.textSize,
});

const fontSizeCompact = theme('mode', {
  techno: palette.techno.textSizeCompact,
  mono: palette.mono.textSizeCompact,
});

const textMargin = theme('mode', {
  techno: palette.techno.textMargin,
  mono: palette.mono.textMargin,
});

const textMarginCompact = theme('mode', {
  techno: palette.techno.textMarginCompact,
  mono: palette.mono.textMarginCompact,
});

const Text = (props) => {
  const { text } = props;
  return (
    <div className={props.className}>
      {text}
    </div>
  );
};

Text.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  compact: PropTypes.bool,
};

Text.defaultProps = {
  align: 'left',
  compact: false,
};

export default styled(Text)`
  font-family: ${font};
  font-size: ${fontSize};
  margin: ${textMargin};
  ${props => props.compact && css`
    font-size: ${fontSizeCompact};
    margin: ${textMarginCompact};
  `}
  text-align: ${props => props.align};
`;
