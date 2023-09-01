import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [signInError, setSignInError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        // alert("User logged in successfully");
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User logged in successfully",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          color: "#e5e5e5",
          background: "#3f4156",
          grow: true,
          timerProgressBar: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => setSignInError(error.code));
  };

  return (
    <div className="container-login">
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
          {/* password */}
          <div className="">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input type="password" name="password" className="input-section" />
          </div>
          <div className="forgot-password">
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
          {signInError === "auth/wrong-password" && (
            <p className="error-message">Wrong Password</p>
          )}
          {signInError === "auth/user-not-found" && (
            <p className="error-message">User not found. Please Sign Up</p>
          )}
          <div>
            <input className="btn btn-primary" type="submit" value="Login" />
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

export default Login;
