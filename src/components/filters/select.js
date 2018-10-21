import React, { Component } from 'react'
import Select from 'react-select'
import { selectArticles } from '../../ac'
import { connect } from 'react-redux'

class SelectFilter extends Component {
  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  handleChange = (selected) => {
    this.props.selectArticles(selected.map((option) => option.value), selected)
  }

  render() {
    const { selected } = this.props
    return (
      <Select
        value={selected}
        options={this.options}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selected: state.filterOptions.selected,
    articles: state.filterOptions.articles
  }),
  {
    selectArticles
  }
)(SelectFilter)
