import React from "react";
import IMg from '../components/images/logo-transparent-png.png'
const Footer = () => {

  return (
    <>
    <div className="mt-auto">
      <div className="main">
        <div className="footer1 md:justify-items-center items-center min-w-screen min-h-96 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-800">
          
          <div className="foot1 md:ms-0 ms-3 text-[12px] text-blue-400 gap-2 flex flex-col ">
         <h1 className="text-2xl text-neutral-100  font-bold md:my-1 my-4 ">About Us</h1>
           <a className="hover:underline md:py-2 py-1  ms-1" href="#">Who We Are</a>
          <a className="hover:underline md:py-2 py-1  ms-1" href="#"> Our Missiona</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="#">Careers</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="#"> Blog</a>
          </div>

          <div className="foot2 md:ms-0 ms-3 text-[12px] text-blue-400 gap-2 flex flex-col">
          <h1 className="text-2xl text-neutral-100 font-bold md:my-1 my-4 ">Courses</h1>
           <a className="hover:underline md:py-2 py-1  ms-1" href="#">Browse Courses</a> 
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Popular Courses</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Free Courses</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Certifications</a>
          </div>

          <div className="foot3 md:ms-0 ms-3 text-[12px] text-blue-400 gap-2 flex flex-col">
          <h1 className="text-2xl text-neutral-100 font-bold md:my-1 my-4 ">Support</h1>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Help Center</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="#">FAQs</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Contact Us</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Technical Support</a>
          </div>
          
          <div className="foot4 md:ms-0 ms-3 text-[12px] text-blue-400 gap-2 flex flex-col">
          <h1 className="text-2xl text-neutral-100 font-bold md:my-1 my-4 ">Resources</h1>
           <a className="hover:underline md:py-2 py-1  ms-1" href="#">Student Portal</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Instructor Portal</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Webinars & Events</a>
           <a className="hover:underline md:py-2 py-1  ms-1" href="">Community Forum</a>
          </div>
        </div>

        <div className="footer2 min-w-screen min-h-80 md:justify-items-center items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-black">
          
          <div className="foot1 md:ms-0 ms-3 text-blue-400 text-[12px] flex flex-col gap-2">
         <h1 className="text-2xl font-bold text-neutral-400 md:my-1 my-4 "> Legal</h1>
         <a className="hover:underline md:py-2 py-1" href="#">Privacy Policy</a>
         <a className="hover:underline md:py-2 py-1" href="#">Refund Policy</a>
         <a className="hover:underline md:py-2 py-1" href="#">Terms of Service</a>
         <a className="hover:underline md:py-2 py-1" href="#">Accessibility</a>
         </div>

          <div className="foot2 md:ms-0 ms-3 text-[12px] text-blue-400 gap-2 flex flex-col">
          <h1 className="text-2xl font-bold text-neutral-400  md:my-1 my-4">Stay Connected</h1>
          <a className="hover:underline" href="#">Subscribe to Our Channel</a>
          </div>

          <div className="foot3 md:ms-0 ms-3 text-[12px] text-blue-400 gap-2 flex flex-col">
          <h1 className="text-2xl font-bold text-neutral-400 md:my-1 my-4 ">Contact Us</h1>
          <a className="hover:underline" href="#">📍 123 Learning .RTS, Online SDY, World</a>
           <a className="hover:underline" href="#">📞 +1-00-00-00</a>
          <a className="hover:underline" href="#">📧 kapoorashish714@gmail.com</a>
         </div>

          <div className="foot4 md:ms-0 ms-3 mb-4 md:mb-0 text-[12px] text-blue-400 gap-2 flex flex-col">
          <h1 className="text-2xl font-bold text-neutral-400 md:my-1 my-4">Instructors</h1>
          <a className="hover:underline" href="">Become an Instructor</a>
          <a className="hover:underline" href="">Instructor Dashboard</a>
          <a className="hover:underline" href="">Teaching Guidelines</a>
          <a className="hover:underline" href="">Payment & Payouts</a>
           </div>
       
        </div>
        
        <div className="base border-2 border-b-0 border-e-0 border-s-0 border-white h-24 w-full bg-black flex flex-row justify-evenly items-center content-center">
          <a href="#"><img className="h-22 md:block hidden" src={IMg} alt="IM" /></a>
          <div className="cont1 text-neutral-400">
            © 2025 Course@$$ Inc. All rights reserved.
          </div>
          <div className="cont2 text-neutral-400 text-2xl flex gap-4">
            <a href="#">
              <i class="fa-brands fa-facebook rounded-full p-2 hover:-rotate-12 hover:text-black hover:bg-white"></i>
            </a>{" "}
            <a href="#">
              <i class="fa-brands fa-instagram  rounded-full p-2 hover:-rotate-12 hover:text-black hover:bg-white"></i>
            </a>{" "}
            <a href="#"><i class="fa-brands fa-linkedin  rounded-full p-2 hover:-rotate-12 hover:text-black hover:bg-white"></i>
            </a>{" "}
            <a href="#"><i class="fa-brands fa-youtube  rounded-full p-2 hover:-rotate-12 hover:text-black hover:bg-white"></i>
            </a>{" "}
            <a href="#"><i class="fa-brands fa-twitter  rounded-full p-2 hover:-rotate-12 hover:text-black hover:bg-white"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
