import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function AuthModel({ setShowModel, isSignUp }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // * 페이지 이동에 사용된다.
  let navigate = useNavigate();

  const handleClick = () => {
    setShowModel(false);
  };

  // ! Create Account에서 Confirm을 눌렀을 때 전송되는 데이터 관리
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Password need to match!");
        return;
      }

      const response = await axios.post(`http://localhost:8080/${isSignUp ? `signup` : `login`}`, { email, password });

      setCookie("AuthToken", response.data.token);
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;
      if (success && isSignUp) navigate("/onboarding");
      if (success && !isSignUp) navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(email, password, confirmPassword);
  // console.log(isSignUp);

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By Clicking Log In, you agree to your terms. Learn how we process your data in our Privacy Policy and Cookie
        Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        )}
        <input className="secondary-button" type="submit" value="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
      AuthModel
    </div>
  );
}
