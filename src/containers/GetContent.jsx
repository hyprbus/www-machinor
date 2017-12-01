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
      modalVisible: false,
      modalHeader: 'Generic Header',
      modalText: 'Generic description',
      site: '',
      siteLabel: '',
      sourceCode: '',
      sourceCodeLabel: '',
      animateModal: '', // 'in', 'out', ''
    };
    this.getTextContent = this.getTextContent.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  showModal(visible, modalHeader, modalText, site, siteLabel, sourceCode, sourceCodeLabel) {
    this.setState(prevState => ({
      modalVisible: true,
      animateModal: 'in',
      modalHeader,
      modalText,
      site,
      siteLabel,
      sourceCode,
      sourceCodeLabel,
    }));
  }

  hideModal() {
    this.setState(prevState => ({
      modalVisible: false,
      animateModal: 'out',
    }));
  }

  render() {
    return (
      <Layout
        content={this.state.content}
        language={this.state.language}
        changeLanguage={this.getTextContent}
        modalVisible={this.state.modalVisible}
        modalHeader={this.state.modalHeader}
        modalText={this.state.modalText}
        showModal={this.showModal}
        hideModal={this.hideModal}
        animateModal={this.state.animateModal}
        site={this.state.site}
        siteLabel={this.state.siteLabel}
        sourceCode={this.state.sourceCode}
        sourceCodeLabel={this.state.sourceCodeLabel}
      />
    );
  }
}

GetContent.propTypes = {
  source: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
