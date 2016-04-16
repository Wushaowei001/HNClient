import React, { Component } from 'react'
import styles from './StoryList.styl'

import StoryListItem from '../components/StoryListItem'

export default class StoryList extends Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    selected: React.PropTypes.number,
    changeSelection: React.PropTypes.func.isRequired
  }

  render () {
    return <div className={styles.listContainer}>
      <h2 className="header">Top Stories</h2>
      <ol className={styles.storyList}>
      {this.props.data.map(this.renderItem, this)}
      </ol>
    </div>
  }

  renderItem (item, i) {
    const isSelected = i === this.props.selected
    return <StoryListItem key={item.id} item={item} isSelected={isSelected} onClick={() => this.props.changeSelection(i)} />
  }
}