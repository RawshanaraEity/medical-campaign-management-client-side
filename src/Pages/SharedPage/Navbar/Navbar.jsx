

import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo.png'


const NavBar = () => {
//   const { logOut, user } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="text-white text-lg font-medium mr-2">
      
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-lime-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-white text-lg font-medium mr-2">
        
        <NavLink
          to="/addBlog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lime-400" : ""
          }
        >
         Available Camps
        </NavLink>
      </li>
      <li className="text-white text-lg font-medium mr-2">
        
        <NavLink
          to="/allBlogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lime-400" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-white text-lg font-medium mr-2">
        
        <NavLink
          to="/featuredBlogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lime-400" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-slate-800 w-full">
      <div className="navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow 
               rounded-box w-36 "
            >
              {navLinks}
            </ul>
          </div>
          <div className=" flex items-center">
            <img src={logo} className="h-20" alt="" />
            <p className="text-3xl text-lime-500 font-bold">MediCamp</p>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>


        <div className="navbar-end">
          {/* {user?.email ? ( */}
            <div>
            <div className="hidden md:block">
            <div className=" flex gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* <img src={user.photoURL? user.photoURL : `https://i.ibb.co/8X8stTp/user.webp`} alt={user.displayName} /> */}
                  </div>
                </label>
                <ul className="flex items-center gap-2">
                  <li>
                    user name
                    {/* <p className="text-xl text-white font-semibold">{user.displayName}</p> */}
                  </li>
                  <li>
                    <button
                      className="btn bg-slate-800 border-2 border-lime-600 text-white"
                    //   onClick={logOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>

              <div className="md:hidden ">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    userphoto
                    {/* <img src={user.photoURL? user.photoURL : `https://i.ibb.co/8X8stTp/user.webp`} alt={user.displayName} /> */}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-slate-800 rounded-box"
                >
                  <li>
                    userNAme
                  {/* <p className="text-sm text-white font-semibold">
                    {user.displayName}</p> */}
                  </li>
                  <li>
                  <button
                      className="btn bg-slate-800 border-2 text-lime-400  w-2/3 mx-auto pt-3 "
                    //   onClick={logOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
              </div>

            </div>
          {/* ) : ( */}
            <Link to="/login">
              <button className="btn rounded-none border-none text-lg bg-lime-600 text-white">Login</button>
            </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
