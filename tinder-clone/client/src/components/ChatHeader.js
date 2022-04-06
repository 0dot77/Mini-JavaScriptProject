import { cookies, useCookies } from "react-cookie";
export default function ChatHeader({ user }) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={"photo fo + " + user.first_name} />
        </div>
        <h3>UserName</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>
        ⬅️
      </i>
    </div>
  );
}
