import { useForm } from "react-hook-form";
import "./SignUp.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register("email", { required: true })}
            name="email"
            // placeholder="Name"
            className="input-section"
          />
          {errors.email && <span>Email is required</span>}
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
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            name="password"
            // placeholder="Name"
            className="input-section"
          />
          {/* {errors.password?.type === "required" && (
            <span className="">Password is required</span>
          )} */}
          <span>{errors.password?.message}</span>
        </div>

        <div className="">
          <input className="" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
