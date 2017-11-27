// Container that reads text content from a json file, filters it based on language
// and passes it to child components for rendering

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import readFile from '../functions/readFile';
import Layout from '../components/Layout';

export default class GetContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      language: 'en',
    };
    this.getTextContent = this.getTextContent.bind(this);
  }

  componentDidMount() {
    this.getTextContent(this.props.language);
  }

  getTextContent(language) {
    readFile(this.props.source, (data) => {
      const filteredContent = [];
      for (let i = 0; i < data.length; i += 1) {
        const langObj = {};
        langObj.id = data[i].id;
        langObj.text = data[i][language];
        filteredContent.push(langObj);
      }
      this.setState({
        content: filteredContent,
        language,
      });
    });
  }

  render() {
    return (
      <Layout
        content={this.state.content}
        language={this.state.language}
        changeLanguage={this.getTextContent}
      />
    );
  }
}

GetContent.propTypes = {
  source: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
