

// import { useContext, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
    // const {signIn} = useContext(AuthContext)
    // const navigate = useNavigate()
    // const location = useLocation()

    // const from = location.state?.from?.pathname || '/';

   

    // const handleLogin = (e) =>{
    //     e.preventDefault()
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    //     signIn(email,password)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user)
    //         Swal.fire({
    //             title: "User Logged in successfull",
    //             showClass: {
    //               popup: `
    //                 animate__animated
    //                 animate__fadeInUp
    //                 animate__faster
    //               `
    //             },
    //             hideClass: {
    //               popup: `
    //                 animate__animated
    //                 animate__fadeOutDown
    //                 animate__faster
    //               `
    //             }
    //           });
    //           navigate(from, {replace: true})
    //     })
    // }

   


    return (
        <div>
             
           <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col-reverse  md:flex-row-reverse">
    <div className="text-center md:w-1/2">
     <img src="https://i.ibb.co/FJh30mB/login1.jpg" alt="" />
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold pt-5">Login now!</h1>
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='px-6 mb-10'><small>New Here?<Link to='/register' className='text-blue-600 font-bold'>Create an account</Link> </small></p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;