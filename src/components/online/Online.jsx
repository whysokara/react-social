import "./online.css";

export default function Online(user) {
  console.log(user);
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={`../assets/${user.user.profilePicture}`}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.user.username}</span>
    </li>
  );
}
