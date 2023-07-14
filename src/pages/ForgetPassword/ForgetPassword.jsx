import { Link, useNavigate } from "react-router-dom";
import "./ForgetPassword.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    resetPassword(email)
      .then(() => {
        alert(`A Password Reset email has been sent to ${email}`);
        navigate(-1);
      })
      .catch((error) => {
        setSignInError(error.code);
      });
  };

  return (
    <div className="container-reset">
      <div className="form-container">
        <h2 className="form-header">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          {/* email */}
          <div className="">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="input-section"
            />
          </div>
          {signInError === "auth/user-not-found" && (
            <p className="error-message">User not found. Please Sign Up</p>
          )}
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Reset Password"
            />
          </div>
        </form>
        <div className="login-container">
          <p>Dont have an account?</p>
          <Link to="/signup" className="link-login">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
