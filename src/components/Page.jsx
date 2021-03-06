import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import { responsive } from './appSettings';

const marginBig = theme('responsivity', {
  responsivityA: responsive.responsivityA.pageMarginLargeScreen,
});

const marginSmall = theme('responsivity', {
  responsivityA: responsive.responsivityA.pageMarginSmallScreen,
});

const maxWidth = theme('responsivity', {
  responsivityA: responsive.responsivityA.maxWidth,
});

const breakpointPhone = theme('responsivity', {
  responsivityA: responsive.responsivityA.breakpointPhone,
});

const Page = (props) => {
  injectGlobal`
    body {
      margin: 0;
      background-color: #ffffff;
    }
  `;
  
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(Page)`
  max-width: ${maxWidth};
  margin: ${marginBig};
  @media screen and (max-width: ${breakpointPhone}px) {
    margin: ${marginSmall};
  }
`;
