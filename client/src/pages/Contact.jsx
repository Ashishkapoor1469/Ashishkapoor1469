import React,{useState} from 'react';
import { useAuth } from '../store/auth'
import { Slide, toast } from 'react-toastify';
const Contact = () => {
  
  const defaultContact = {
    username:"",
    email:"",
    message:""
  }
  const [user, setuser] = useState(defaultContact);

  const [userData, setuserData] = useState(true);
  const { User,API } = useAuth();

if(userData && User){
  setuser({
  username: User.username,
  email: User.email,
  message: "",
});
setuserData(false);
};


const handleInput =(e)=>{
let {name,value} = e.target;
setuser({...user,[name]:value})
};
const handleSubmit =async (e)=>{
  e.preventDefault();

 try {
  const response = await fetch(`${API}/api/form/contact`,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(user),
  });

  if(response.ok){
    setuser(defaultContact);
    toast.success('massage sent suucessfully')
  }
 } catch (error) {
  toast.error(`error ${error}`)
  
 }

console.log(user);

 console.log("Contact form submit successfully");
}
  return (
    <>
<div className="slabo-27px-regular pt-0 md:pt-10 pb-24 min-h-screen  bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl shadow-stone-700 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              autoComplete='off'
              name='username'
              placeholder="Your Userame"
              value={user.username}
            onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              autoComplete='off'
              placeholder="Your Email"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              name='message'
              autoComplete='off'
              placeholder="Your Message"
              value={user.message}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;