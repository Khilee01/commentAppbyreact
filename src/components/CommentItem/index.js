// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDelete, toggleLike} = props
  const {name, comment, time, id, isLiked, backgroundClassName} = commentDetails
  const onClickDelete = () => {
    onDelete(id)
  }
  const onClickLike = () => {
    toggleLike(id)
  }
  const likeImageSrc = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const isliked = isLiked ? 'liked' : 'unlike'
  return (
    <li className="CommentList">
      <div className="nameAndTime">
        <div className="name">
          <p className={`abrevation ${backgroundClassName}`}>{name[0]}</p>
          <p>{name}</p>
        </div>
        <p>{time} ago</p>
      </div>
      <p className="commentText">{comment}</p>
      <div className="icons">
        <div className="LikeContent">
          <img src={likeImageSrc} className="likeImg" alt="like" />
          <button
            type="button"
            className={`nobtn ${isliked}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          data-testid="delete"
          className="nobtn"
          onClick={onClickDelete}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteImg"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
