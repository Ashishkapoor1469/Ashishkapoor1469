import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import {motion} from 'motion/react'
import {toast} from 'react-toastify'
const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken,API } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken, 
        },
      });

      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

const deleteContact = async (id) =>{
  try {
    const response = await fetch(`${API}/api/admin/contacts/delete/${id}`,{
      method:"DELETE",
      headers:{
        Authorization: authorizationToken,
      }
    });
    if(response.ok){
    getContactData();
    toast.success('deleted')
      }
  } catch (error) {
    console.log('faild deleting ');
    
  }
}


  useEffect(() => {
    getContactData();
  }, []);

  return (
    <>
    <section className='admin flex flex-col justify-center align-middle '>
     <h1 className='text-7xl text-center font-bold '>Contact Data</h1>
     <div className="admin-users">
      {contactData.map((curContact, index) => {
        const {_id,username,email,message} = curContact;
      return(
        <div className='border-2' key={index}>
        <div className='p-3 border border-s-0 border-t-0 border-b-0'><p className='text-xl text-emerald-800 font-mono'>Username:</p>{username}</div>
        <div className='p-3 border border-s-0 border-t-0 border-b-0'><p className='text-xl text-emerald-800 font-mono'>Email:</p>{email}</div>
        <div className='p-3 border border-s-0 border-t-0 border-b-0 border-e-0'><p className='text-xl text-emerald-800 font-mono'>Message:</p>{message}</div>
        <motion.button onClick={()=> deleteContact(_id)} whileTap={{scale:0.7}} className='px-4 py-1.5 bg-emerald-800 ms-3 my-2 rounded-3xl cursor-pointer'>Delete</motion.button>
        </div>
        
        );
        })}
        </div>
      </section>
    </>
  );
};

export default AdminContacts;