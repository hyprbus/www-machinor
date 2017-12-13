import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const hrefTypes = {
  mail: 'mailto:',
  phone: 'tel:',
};

const Contact = props => (
  <a className={props.className} href={hrefTypes[props.contactType] + props.contact}>
    {props.children}
  </a>
);

Contact.defaultProps = {
  children: null,
};

Contact.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  contactType: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export default styled(Contact)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
