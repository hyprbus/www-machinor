import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.textFont}, ${props => props.theme.fallbackFont};
  font-size: 1em;
  text-decoration: none;
  margin: 2% 0 -5px 0;
  padding: 0;
  &:hover {
    border-bottom: 5px solid ${props => props.theme.linkHoverColor};
  }
`;
