import React, { Component } from 'react'
import styles from './ListHeader.styl'

import DisplayChooser from './DisplayChooser'

// This is not a duplicate from ResourceChooser, since some labels here are
// shorter because there's less available place
const resources = {
  "news": "Top Stories",
  "newest": "Newest Stories",
  "ask": "Ask HN",
  "show": "Show HN",
  "shownew": "Newest Show HN",
  "best": "Highest voted recent",
  "active": "Most active",
  "noobstories": "From new users"
}

export default class ListHeader extends Component {
  static propTypes = {
    onHamburger: React.PropTypes.func.isRequired,
    enabled: React.PropTypes.bool.isRequired,
    onDisplayChange: React.PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      enabled: props.enabled
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ enabled: nextProps.enabled })
  }

  render () {
    return <h2 className="header storyHeader">
      <button className={`${styles.hamburgerContainer} ${this.state.enabled ? styles.open : ""}`} onClick={this.toggle.bind(this)}>
        <div className={styles.hamburger} />
      </button>
      {resources[this.props.resource]}
      <DisplayChooser onChange={this.props.onDisplayChange} />
    </h2>
  }

  toggle () {
    const enabled = !this.state.enabled
    this.setState({ enabled })
    this.props.onHamburger(enabled)
  }
}