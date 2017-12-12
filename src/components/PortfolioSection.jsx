import React from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import Row from './Row';
import Column from './Column';
import PortfolioItem from './PortfolioItem';
import ImageFramer from './ImageFramer';
import txt from '../functions/txt';
import { palette } from './appSettings';

const fill = theme('mode', {
  techno: palette.techno.accentComplement,
  mono: palette.mono.accentComplement,
});

const PortfolioSection = (props) => {
  const { content } = props;
  const portfolio = [];
  props.portfolioItems.forEach((p) => {
    const SVGElement = styled(p.image)`
      fill: ${fill};
      opacity: .4;
      height: 200px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `;
    portfolio.push(<Column small key={p.header} kind="complement">
      <PortfolioItem
        header={txt(content, p.header)}
        summary={txt(content, p.summary)}
        text={txt(content, p.description)}
        showModal={props.showModal}
        portfolioId={p.header}
        site={p.site}
        siteLabel={txt(content, 'portfolioLink')}
        sourceCode={p.sourceCode}
        sourceCodeLabel={txt(content, 'portfolioSourceCode')}
      >
        <ImageFramer>
          <SVGElement />
        </ImageFramer>
      </PortfolioItem>
    </Column>);
  });

  return (
    <Row>
      {portfolio}
    </Row>
  );
};

PortfolioSection.propTypes = {
  portfolioItems: PropTypes.arrayOf(object).isRequired,
  content: PropTypes.arrayOf(Object).isRequired,
  showModal: PropTypes.func.isRequired,
};

export default PortfolioSection;
