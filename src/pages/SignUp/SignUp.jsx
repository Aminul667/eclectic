import { useForm } from "react-hook-form";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

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
          axios.post("http://localhost:5000/users", savedUser).then((data) => {
            if (data.data.insertedId) {
              // reset();
              alert("User Created Successfully");
            }
            navigate("/");
          });
        });
      })
      .catch((error) => {
        if(error){
          alert("User already exists. Please login!")
        }
      });

    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);
    //   updateUserProfile(data.name, data.PhotoURL)
    //     .then(() => {
    //       const saveUser = { name: data.name, email: data.email };
    //       fetch("https://bistro-boss-m74-server-aminul667.vercel.app/users", {
    //         method: "POST",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify(saveUser),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.insertedId) {
    //             reset();
    //             Swal.fire({
    //               position: "top-end",
    //               icon: "success",
    //               title: "User Created Successfully",
    //               showConfirmButton: false,
    //               timer: 1500,
    //             });
    //             navigate("/");
    //           }
    //         });
    //     })
    //     .catch((error) => console.log(error));
    // });
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
          {errors.name && <span>Name is required</span>}
        </div>

        {/* photo url */}
        <div className="">
          <label className="label">
            <span className="">Photo Url</span>
          </label>
          <input
            type="text"
            {...register("photoUrl", { required: true })}
            name="photoUrl"
            // placeholder="Name"
            className="input-section"
          />
          {errors.photoUrl && <span>Photo is required</span>}
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
            // placeholder="Name"
            className="input-section"
          />
          {errors.email?.message && <small>{errors.email.message}</small>}
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
                matchPattern: (v) =>
                  /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/.test(v) ||
                  "Password should contain at least one upper case latter, one lowercase latter and one special character",
              },
            })}
            name="password"
            // placeholder="Name"
            className="input-section"
          />
          <span>{errors.password?.message}</span>
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
