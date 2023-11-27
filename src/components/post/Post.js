import './post.css'
import { MoreVert } from "@material-ui/icons"

export default function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
          <div className='postTop'>
            <div className='postTopLeft'>
              <img className='postProfileImage' src='/assets/person/1.jpeg'/>
              <span className='postUsername'>Jane Doe</span>
              <span className='postDate'>5 min ago</span>
            </div>
            <div className='postTopRight'>
              <MoreVert />
            </div>
          </div>
          <div className='postCenter'>
            <span className='postText'>Hey! It's my first post!!</span>
            <img className='postImage' src='/assets/post/1.jpeg'/>
          </div>
          <div className='postBottom'>
            <div className='postBottomLeft'>
              <img className='likeIcon' src='assets/like.png'/>
              <img className='likeIcon' src='assets/heart.png'/>
              <span className='postLikeCounter'>32 people liked it</span>
            </div>
            <div className='postBottomRight'>
              <span className='postCommentText'>9 comments</span>
            </div>
          </div>
        </div>
    </div>
  )
}
