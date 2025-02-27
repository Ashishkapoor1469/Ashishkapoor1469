import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import "./login.css";
const Signup = () => {
  const [user, setuser] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

const [open, setOpen] = useState(false);
const toggle = ()=>{
  setOpen(!open)
}

  const navigate = useNavigate();
  const { storeTokenInLS,API } = useAuth();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    //logic
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
   
      const res_data = await response.json();
      console.log("res for server", res_data.extraDetails);
      if (response.ok) {
        
        storeTokenInLS(res_data.token);
        setuser({
          username: "",
          fullname: "",
          email: "",
          password: "",
        });
        toast.success("Registration Successfull");
        navigate("/");
      }else{
         toast.error(res_data.extraDetails ?res_data.extraDetails :res_data.message);
      }
    } catch (error) {
      toast(`registration err ${error}`)
    }
  };

  return (
    // Add the following code inside the return statement
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
        className="markazi-text-small img main min-w-screen pb-18 md:min-h-auto md:justify-normal justify-center min-h-svh flex py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="imgfo md:block hidden mix-blend-color-burn ms-14">
          <img
            className="h-5xl w-3xl "
            src="https://img.freepik.com/premium-vector/online-registration-sign-up-concept-man-signing-up-login-online-account-with-user-interface_185038-893.jpg?w=996"
            alt=""
          />
        </div>
        <div className="p-8 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handlesubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                className="w-full px-3 py-2 border border-t-0 border-s-0 border-e-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                id="fullName"
                required
                autoComplete="off"
                className="w-full px-3 py-2 border border-t-0 border-s-0 border-e-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.fullname}
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                required
                className="w-full px-3 py-2 border border-t-0 border-s-0 border-e-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
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
                required
                className="w-full px-3 py-2 border border-t-0 border-s-0 border-e-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?
            <Link to="/" className="text-blue-500 hover:underline font-extrabold">
            {" "}  Login here
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Signup;
