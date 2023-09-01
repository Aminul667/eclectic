import { useForm } from "react-hook-form";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoUrl).then(() => {
          const savedUser = { name: data.name, email: data.email };
          axios
            .post("https://myblog-server.vercel.app/users", savedUser)
            .then((data) => {
              if (data.data.insertedId) {
                // reset();
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 2000,
                  toast: true,
                  color: "#e5e5e5",
                  background: "#3f4156",
                  grow: true,
                  timerProgressBar: true,
                });
              }
              navigate("/");
            });
        });
      })
      .catch((error) => {
        if (error) {
          // alert("User already exists. Please login!");
          Swal.fire({
            position: "top",
            icon: "info",
            title: "User already exists. Please login!",
            showConfirmButton: true,
            confirmButtonColor: "#71c6dd",
            // timer: 2000,
            // toast: true,
            color: "#e5e5e5",
            background: "#3f4156",
            grow: true,
            // timerProgressBar: true,
          });
        }
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-header">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* name */}
        <div className="">
          <label className="label">
            <span className="">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            // placeholder="Name"
            className="input-section"
          />
          {errors.name && <p className="error-message">Name is required</p>}
        </div>

        {/* photo url */}
        <div className="">
          <label className="label">
            <span className="">Photo Url</span>
          </label>
          <input
            type="text"
            {...register("photoUrl")}
            name="photoUrl"
            // placeholder="Name"
            className="input-section"
          />
          {/* {errors.photoUrl && <span className="error-message">Photo is required</span>} */}
        </div>

        {/* email */}
        <div className="">
          <label className="label">
            <span className="">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address must be a valid address",
              },
            })}
            name="email"
            className="input-section"
          />
          {errors.email?.message && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className="">
          <label className="label">
            <span className="">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,

              validate: {
                maxLength: (v) =>
                  v.length >= 8 || "Password should be at least 8 character",
                // matchPattern: (v) =>
                //   /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/.test(v) ||
                //   "Password should contain at least one upper case latter, one lowercase latter and one special character",
              },
            })}
            name="password"
            // placeholder="Name"
            className="input-section"
          />
          <p className="error-message">{errors.password?.message}</p>
        </div>

        <div>
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <div className="login-container">
        <p>Already have an account?</p>
        <Link to="/login" className="link-login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
