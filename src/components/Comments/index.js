import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
    countComment: 0,
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachList => eachList.id !== id,
      ),
      countComment: prevState.countComment - 1,
    }))
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const backgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: formatDistanceToNow(new Date()),
      backgroundClassName,
    }
    this.setState(prevState => ({
      name: '',
      comment: '',
      commentsList: [...prevState.commentsList, newComment],
      countComment: prevState.countComment + 1,
    }))
  }

  render() {
    const {name, comment, countComment, commentsList} = this.state
    return (
      <div className="mainContainer">
        <h1 className="Comments">Comments</h1>
        <div className="formImage">
          <form onSubmit={this.addComment}>
            <p>Say Something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={this.changeName}
            />
            <textarea
              value={comment}
              type="text"
              onChange={this.changeComment}
              rows="6"
              placeholder="Your Comment"
            />
            <button className="addComment" type="submit">
              Add Comment
            </button>
          </form>
          <img
            alt="comments"
            className="commentImage"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr />
        <div className="commentCount">
          <p className="count">{countComment}</p>
          <p className="comment">Comments</p>
        </div>
        <ul>
          {commentsList.map(commentDetails => (
            <CommentItem
              commentDetails={commentDetails}
              key={commentDetails.id}
              onDelete={this.onDelete}
              toggleLike={this.toggleLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
