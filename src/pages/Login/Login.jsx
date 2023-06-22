import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-header">Login</h2>
      <form className="form">
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
          <input
            type="password"
            name="password"
            className="input-section"
          />
        </div>
        <div>
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div className="login-container">
        <p>Dont have an account?</p>
        <Link to="/signup" className="link-login">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
