import { Link } from "react-router-dom";
// import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2>This is login Component</h2>
      <p>
        Dont have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
