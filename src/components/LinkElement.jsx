import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const color = theme('mode', {
  techno: palette.techno.mainColor,
});

const hoverColor = theme('mode', {
  techno: palette.techno.linkHoverColor,
});

const font = theme('mode', {
  techno: palette.techno.textFont,
});

const Link = props => (
  <a className={props.className} href={props.link} target="_blank">
    {`${props.label} >>`}
  </a>
);

Link.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default styled(Link)`
  display: inline-block;
  color: ${color};
  font-family: ${font};
  font-size: 1em;
  text-decoration: none;
  margin: 2% 0 -5px 0;
  padding: 0;
  &:hover {
    border-bottom: 5px solid ${hoverColor};
  }
`;
