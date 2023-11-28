import "./topbar.css";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <nav id="navSticky">
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to='/' className="logo">pandaSocial</Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <Link to='/' className="topbarLink">Homepage</Link>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to='/profile'>
            <img src="/assets/person/7.jpeg" alt="" className="topbarImg"/>
          </Link>
        </div>
      </div>
    </nav>
  );
}