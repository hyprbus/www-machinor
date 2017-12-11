import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageFramer = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

ImageFramer.propTypes = {
  align: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

ImageFramer.defaultProps = {
  align: 'left',
  children: null,
};

export default styled(ImageFramer)`
  padding: 20px 0 20px 0;
  align: ${props => props.align};
`;
