import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../SharedPage/socialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  // const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data?.name, data?.photoUrl).then((res) => {
        console.log("user profile info updated", res);

        // create user entry in the database
        //   const userInfo = {
        //     name: data.name,
        //     email: data.email,
        //   };
        //   axiosPublic.post("/users", userInfo).then((res) => {
        // if (res.data.insertedId) {
        if (loggedUser) {
          console.log("user added to the database");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
      // })
      // .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>MediCamp/Signup</title>
      </Helmet>
      <div className=" bg-base-200">
        <h1 className="text-5xl pt-10 text-center font-bold">SignUP!</h1>
          <div className="card mt-10 w-5/12 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             <div className="flex gap-5">
             <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-600">Photo Url is required</span>
                )}
              </div>
             </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text ">Role</span>
                </label>
                <select
                  className="input input-bordered"
                  {...register("role")}
                >
                  <option value="organizers">Organizer</option>
                  <option value="healthcareProfessionals">Healthcare Professional</option>
                  <option value="participants">Participant</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 charecters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 charecters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase, one lower case, one number
                    and one special characters charecters
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-lime-500 text-white"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <p className="px-6">
              <small className="text-lg">
                Already have an account?<Link to="/login"><span className="text-lime-500 font-bold"> Login</span></Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    
  );
};

export default Register;
