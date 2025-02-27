import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
  });
  const params = useParams();
  console.log("prams sinle user:", params);
  const { authorizationToken, API } = useAuth();

  //get single user
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      getSingleUserData();
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Data updated");
      } else {
        toast.error("ERROR data not updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col">
      <div className="contect flex justify-center ">
        <h1 className=" text-5xl font-bold p-4">Update user</h1>
      </div>
      <div className="flex justify-center">
        <section className="flex container w-96 border justify-center text-center ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-blue-600" htmlFor="username">
                username
              </label>
              <input
                className="border border-t-0 border-e-0 border-s-0 py-3"
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullname">fullname</label>
              <input
                className="border border-t-0 border-e-0 border-s-0 py-3"
                type="text"
                name="fullname"
                id="fullname"
                autoComplete="off"
                value={data.fullname}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="border border-t-0 border-e-0 border-s-0 py-3"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>

            <div className="flex flex-col m-4">
              <motion.button
                whileTap={{ scale: 0.7 }}
                type="submit"
                className="px-4 py-2 bg-blue-700 rounded"
              >
                Update
              </motion.button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
