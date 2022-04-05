import whiteLogo from "../images/logo-white.png";
import colorLogo from "../images/logo-color.png";

export default function Nav({ minimal, setShowModel, showModel, setIsSignUp }) {
  const handleClick = () => {
    setShowModel(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="logo" />
      </div>

      {!authToken && (
        <button className="nav-button" onClick={handleClick} disabled={showModel}>
          Log in
        </button>
      )}
    </nav>
  );
}
