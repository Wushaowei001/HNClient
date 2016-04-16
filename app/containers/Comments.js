import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import styles from './Comments.styl'

import CommentList from '../components/CommentList'

export default class Comments extends Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      loading: true,
      failed: false,
      comments: []
    }
  }

  componentDidMount () {
    this.fetch()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.id !== this.props.id) this.fetch()
  }

  render () {
    return <div className={styles.commentContainer}>
      <h2 className="header commentHeader">{this.state.count} comments</h2>
      <div className={styles.commentList}>
        {this.state.comments.map(this.renderComment, this)}
      </div>
    </div>
  }

  renderComment (comment, i) {
    return <CommentList data={comment} />
  }

  fetch () {
    this.setState({ loading: true, failed: false })

    axios.get(`http://localhost:1339/item/${this.props.id}`).then(response => {
      this.setState({ comments: response.data.comments, count: response.data.comments_count, loading: false, failed: false })
    }).catch(response => {
      this.setState({ loading: false, failed: true })
    })
  }
}