import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash } from "react-icons/fa";

import "./login.css";
const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });


const [open, setOpen] = useState(false);
const toggle = ()=>{
  setOpen(!open)
}

  const navigate = useNavigate();
  const { storeTokenInLS,API } = useAuth();
  const { isLoggedIn } = useAuth();
  const handleInput = (e) => {
    let { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    //logic
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);
      const res_data = await response.json();

      if (response.ok) {
        toast.success("login successfull");
        storeTokenInLS(res_data.token);

        setuser({ email: "", password: "" });
        navigate("/home");
      } else {
        toast.error(res_data.extraDetails ?res_data.extraDetails :res_data.message);
        toast.error("Password must be  incorrect");
      }
    } catch (error) {
      toast.error('invalid values')
      console.log("Login error", error);
    }
  };
  return (
    <>
    {isLoggedIn ? navigate('/home'):<>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
        className="main markazi-text-small img min-w-screen min-h-svh md:min-h-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-neutral-400 pb-24"
      >
        <div className="imgform mix-blend-color-burn md:block hidden">
          <img
            className="h-5xl w-xl"
            src="https://img.freepik.com/premium-photo/man-holding-phone-with-lock-it_1276622-21956.jpg?w=740"
            alt=""
          />
        </div>
        <div className=" p-8 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handlesubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type='email'
                id="email"
                name="email"
                autoComplete="off"
                className="w-full px-3 py-2 border border-t-0 border-s-0 border-e-0  focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Email"
                required
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password 
                <div className=" absolute pt-4 ps-70 text-2xl">
               { (open === false)? <FaEye onClick={toggle} />
               :<FaEyeSlash onClick={toggle} />
               }
               
                </div>
              </label>
              <input
                type={(open === false)?'password':'text'}
                id="password"
                name="password"
                autoComplete="off"
                className="w-full px-3 py-2 border  border-t-0 border-s-0 border-e-0  focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/Signup" className="text-green-800 font-extrabold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </>
    }
      
    </>
  );
};

export default Login;
