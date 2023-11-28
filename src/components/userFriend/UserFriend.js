import "./userFriend.css"

export default function UserFriend({user}) {
  return (
    <div className="rightbarFollowings">
        <div className="rightbarFollowing">
            <img
              src={user.profilePicture}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{user.username}</span>
          </div>
    </div>
    
  )
}
