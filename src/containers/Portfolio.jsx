// props: translations
// pass translated portfolioData downwards

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioSection from '../components/PortfolioSection';
import Avocado from '../images/avocado.svg';
import Game from '../images/game.svg';
import Invader from '../images/spaceinvader.svg';

const portfolioData = [
  {
    image: Avocado,
    header: 'portfolio1',
    summary: 'portfolio1Desc',
    description: 'portfolio1FullText',
    site: 'http://fatvegan.azurewebsites.net',
    sourceCode: 'https://github.com/hyprbus/fatvegan',
  },
  {
    image: Invader,
    header: 'portfolio2',
    summary: 'portfolio2Desc',
    description: 'portfolio2FullText',
    site: '',
    sourceCode: 'https://github.com/hyprbus/www-machinor',
  },
  {
    image: Game,
    header: 'portfolio3',
    summary: 'portfolio3Desc',
    description: 'portfolio3FullText',
    site: 'http://pandapropaganda.com/work/afrika_game/afrika.html',
    sourceCode: '',
  },
];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItems: portfolioData,
    };
  }

  render() {
    return (
      <PortfolioSection
        portfolioItems={this.state.portfolioItems}
        content={this.props.content}
        showModal={this.props.showModal}
      />
    );
  }
}

Portfolio.propTypes = {
  content: PropTypes.arrayOf(Object).isRequired,
  showModal: PropTypes.func.isRequired,
};
