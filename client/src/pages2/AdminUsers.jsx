import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import  {Link} from 'react-router-dom'
import { motion } from "motion/react";
import '../App.css'

const AdminUsers = () => {
   
  const { authorizationToken,API } = useAuth();
const [users, setUser] = useState([]);
  

const getAllUsersData = async () => {

    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

// del user
const deleteUser =async (id)=>{
  const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationToken,
    },
  });
  const data = await response.json();
      if(response.ok){
        getAllUsersData();

      }
};



  useEffect(() => {
   getAllUsersData();
  }, []);
  return (
    <>
     <motion.section initial={{opacity:0}} animate={{opacity:10}} transition={{duration:1}} className="admin">
     <div className="container">
     <h1 className="text-6xl font-extrabold text-cyan-700 text-center p-12">Users Data</h1>
     </div>
     <div className=" md:text-2xl sm:text-sm text-[10px]">

     <table className="mx-auto bg-gray-400 rounded-2xl rounded-b-lg">
      <thead className=" border border-t-0 border-e-0 border-s-0 rounded-4xl">
        <tr className="font-serif ">
          <th className="ps-3 pe-4 py-4">Username</th>
          <th className="ps-3 pe-1 py-4">Fullname</th>
          <th className="ps-3 px-11 py-4">Email</th>
          <th className="ps-3 px-11 py-4">Upadate</th>
          <th className="ps-3 px-11 py-4">Delete</th>
        </tr>
      </thead>
      <tbody className="bg-gray-400">
      {users.map((curUser,index)=>{
        return <tr key={index}>
          <td className="text-sm border border-e-0 border-s-0 px-4 py-5 text-blue-800 text-center">{curUser.username}</td>
          <td className="text-sm border border-e-0 border-s-0 px-4 py-5 text-green-800 text-center">{curUser.fullname}</td>
          <td className="text-sm border border-e-0 border-s-0 px-4 py-5 text-purple-800 text-center">{curUser.email}</td>
          <td className="text-[10px] border border-e-0 border-s-0 px-4 py-5 font-bold text-center text-cyan-600   "><Link to={`${curUser._id}/edit`}><motion.button whileTap={{scale:0.7}} className="py-2  w-15 text-center  hover:bg-green-600 bg-green-400 text-white rounded-2xl  cursor-pointer">Edit</motion.button></Link></td>
          <td className="text-[10px] border border-e-0 border-s-0 px-4 py-5 font-bold text-center text-emerald-600"><motion.button whileTap={{scale:0.7}} onClick={()=> deleteUser(curUser._id)} className=" py-2 w-15 text-center text-indigo-800  hover:bg-rose-800 bg-rose-300 rounded-[6px] cursor-pointer"> Delete</motion.button></td>
        </tr>
      })}
      </tbody>
     </table>
     </div>
   </motion.section> 
   </>
  );
};

export default AdminUsers;
