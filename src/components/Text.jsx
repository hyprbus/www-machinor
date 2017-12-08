import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const font = theme('mode', {
  techno: palette.techno.textFont,
});

const fontSize = theme('mode', {
  techno: palette.techno.textSize,
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
};

Text.defaultProps = {
  align: 'left',
};

export default styled(Text)`
  font-family: ${font};
  font-size: ${fontSize};
  text-align: ${props => props.align};
  margin: 0 0 1em 0;
  line-height: 1.5;
`;
