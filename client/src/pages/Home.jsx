import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { IoSparklesOutline } from "react-icons/io5";
import { motion } from "motion/react";
import LOgo from "../components/images/logo-transparent-png.png";
import Mp4 from "../components/vedios/28320-369325356.mp4";
import Mpp4 from "../components/vedios/11041434-hd_1920_1080_30fps.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import ImG from "../components/images/Vite + React - Google Chrome 25-02-2025 09_58_41 PM.png";
import "../components/css/Home.css";
const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const OnClickclose = () => setisOpen(!isOpen);
  return (
    <>
      <div className="main min-w-screen min-h-46">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper min-w-screen h-76 md:h-140"
        >
          <SwiperSlide className="img1 flex">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 ms-5 md:ms-20 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-400">
              Our Fantacy
            </h1>
            <p className=" flex flex-col gap-3 mt-3 w-96 p-1 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-black to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img2">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 ms-5 md:ms-20 text-2xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-teal-400  to-yellow-200">
              To Learn More
            </h1>
            <p className=" mt-3 w-96 flex flex-col gap-3 p-1 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-blue-300 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img3">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 ms-5 md:ms-20 text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-br from-fuchsia-500 via-emerald-500 to-cyan-500">
              Helping You
            </h1>
            <p className=" mt-3 w-96 flex flex-col gap-3 p-1 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-green-200 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold text-white py-2 bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img4">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 ms-5 md:ms-20 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-bl  from-slate-500 to-slate-800">
              Differant Programs
            </h1>
            <p className=" mt-3 w-96 flex flex-col gap-3 p-1 h-full  ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-amber-800 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold text-white py-2 bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img5">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 font-bold ms-5 md:ms-20 text-2xl bg-clip-text text-transparent bg-gradient-to-bl from-sky-800 via bg-neutral-500 to-gray-400">
              Learn Different Language's
            </h1>
            <p className=" mt-3 w-96 flex flex-col gap-3 p-1 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-purple-600 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img6">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 font-bold ms-5 md:ms-20 text-2xl bg-clip-text text-transparent bg-gradient-to-bl from-gray-800 via-amber-300 to-gray-800">
              Achive Your Goal
            </h1>
            <p className=" mt-3 p-1 flex flex-col gap-3 w-96 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-green-200 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img7">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 font-bold ms-5 md:ms-20 text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-green-800 via bg-blue-200 to-purple-800">
              Belevie yourSelf
            </h1>
            <p className=" mt-3 p-1 flex flex-col gap-3 w-96 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-green-200 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img8">
            <h1 className="md:text-5xl mt-14 md:mt-36 font-bold ms-5 md:ms-20 text-2xl bg-clip-text text-transparent bg-gradient-to-bl from-red-800 via bg-gray-500 to-green-400">
              Put more efforts
            </h1>
            <p className=" mt-3 p-1 flex flex-col gap-3 w-96 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-green-200 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide className="img9">
            <h1 className="md:text-5xl p-1 mt-14 md:mt-36 font-bold ms-5 md:ms-20 text-2xl bg-clip-text text-transparent bg-gradient-to-bl from-slate-800 via bg-gray-500 to-amber-300">
              ........
            </h1>
            <p className=" mt-3 p-1 flex flex-col gap-3 w-96 h-full ms-5 md:ms-20 text-sm bg-gradient-to-l from-red-800 via-green-200 to-indigo-400 text-transparent bg-clip-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati ipsa, molestiae ipsam aut minus quas
              accusantium. Sit accusamus, mollitia recusandae reprehenderit
              fugit, fugiat dolor esse, nihil sint ex qui. <br />
              <a
                className="px-4 w-20 font-bold py-2 text-white bg-blue-600 rounded-xl"
                href="#"
              >
                clickme
              </a>
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pag1 bg1 min-w-screen h-96 md:min-h-screen flex md:flex-row flex-col justify-between">
        <div className="left p-4 h-180 md:min-h-screen md:w-120 min-w-96">
          <div className="h-full w-full border-2 border-neutral-700 px-4 border-t-0 border-s-0 border-b-0">
            <video
              className="rounded-3xl md:block hidden p-2 "
              src={Mp4}
              width="1440"
              height="680"
              autoPlay
              muted
              loop
            />

            <p className="p-3 h-86 border-2 text-white border-s-0 border-e-0  font-light text-[12px] overflow-scroll overflow-x-hidden scroll-auto  [&::-webkit-scrollbar]:w-2">
              <h1 className="text-xl  text-center h-10 text-black bg-gray-200 rounded-xl font-mono">
                Programing languages
              </h1>
              <h3 className="font-bold p-0.5 underline">Low-Level Languages</h3>
              Machine Language (Binary Code): Directly understood by the CPU (0s
              and 1s). Assembly Language: Uses mnemonics (short codes) instead
              of binary, closer to hardware.
              <h3 className="font-bold p-0.5 underline">
                High-Level Languages
              </h3>
              These are human-readable and require compilers or interpreters to
              execute.
              <h1 className="p-0.5">
                <a href="#">
                  <h4 className="text-blue-800 font-medium">
                    a) Procedural Languages
                  </h4>
                  C: Fast, used in system programming, embedded systems. Pascal:
                  Used in teaching programming concepts. Fortran: Scientific
                  computing, numerical analysis.
                </a>
                <a href="#">
                  <h1 className="text-blue-800 font-medium">
                    b) Object-Oriented Languages
                  </h1>
                  C++: Extension of C, supports OOP (Object-Oriented
                  Programming). Java: Platform-independent, used in enterprise
                  applications. C#: Developed by Microsoft, used for Windows
                  applications and game development (Unity).
                </a>
                <a href="">
                  <h1 className="text-blue-800 font-medium">
                    c) Scripting Languages
                  </h1>
                  Python: Easy to learn, used in AI, web development,
                  automation. JavaScript: Web development, runs in browsers.
                  Ruby: Web development (Ruby on Rails).
                </a>
                <a href="">
                  <h1 className="text-blue-800 font-medium">
                    d) Functional Languages
                  </h1>
                  Haskell: Purely functional, used in academia and research.
                  Lisp: AI research, symbolic computing. Scala: Runs on JVM,
                  combines functional and object-oriented paradigms.
                </a>
                <a href="">
                  <h1 className="text-blue-800 font-medium">
                    e) Database Languages
                  </h1>
                  SQL: Used for managing databases.
                </a>
                <a href="">
                  <h1 className="text-blue-800 font-medium">
                    f) Web Development Languages
                  </h1>
                  HTML & CSS: Structure and styling of web pages. PHP:
                  Server-side scripting for web development.
                </a>
                <a href="">
                  <h1 className="text-blue-800 font-medium">
                    g) Mobile Development
                  </h1>
                  Swift: iOS applications. Kotlin: Android development
                </a>
              </h1>
            </p>
          </div>
        </div>
        <div className="right md:flex flex-col gap-8 hidden h-180  p-7 min-h-screen  justify-center">
          <div className="flex gap-4 w-full full justify-center items-center">
            <div className="card1 w-80 h-82 bg-gray-700 shadow-lg shadow-black  rounded-xl">
              {" "}
              <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                📖Interactive Courses
              </h1>
              <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                Explore our interactive courses designed to make learning fun
                and engaging. Master new skills at your own pace with expert-led
                lessons.
                <Link
                  to="/services"
                  className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                >
                  Learn More →
                </Link>
              </p>
            </div>
            <div className="card9 w-80 h-82 bg-gray-700 shadow-lg shadow-black  rounded-xl">
              {" "}
              <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font rounded-t-2xl ">
                📝Quizzes & Assessments
              </h1>
              <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                Test your knowledge with interactive quizzes and assessments.
                Track your progress and identify areas for improvement as you
                learn.
                <Link
                  to="/courses"
                  className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                >
                  Learn More →
                </Link>
              </p>
            </div>
            <div className="card3 w-80 h-82 bg-gray-700 shadow-lg shadow-black  rounded-xl">
              {" "}
              <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                📚Expert-Led Tutorials
              </h1>
              <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                Gain insights from industry experts through our comprehensive
                tutorials. Learn practical tips and strategies to excel in your
                field.
                <Link
                  to="/services"
                  className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                >
                  Learn More →
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full full justify-center items-center">
          <div className="card8 w-80 h-82 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-2xl px-3 caveat-font  rounded-t-2xl">
                    🚀Career Guidance & Mentorship
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Take advantage of career coaching and mentorship programs.
                    Get expert advice and take the next step toward your dream
                    job.
                    <a
                      href="#"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card10 w-80 h-82 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🔨Project-Based Learning
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Apply what you learn through real-world projects. Gain
                    hands-on experience and build a portfolio to showcase your
                    skills.
                    <a
                      href="#"
                      className="mt-4   inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card2 w-80 h-82 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🎤Live Workshops
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Join our live workshops and get hands-on experience with
                    real-world projects. Engage with instructors and peers in a
                    dynamic learning environment.
                    <Link
                      to="/services"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </Link>
                  </p>
                </div>
          </div>
        </div>
      </div>

      <div className="page2 gap-2 sm:hidden block  min-w-screen min-h-[1100px] bg-orange-100 border-2 border-b-0 border-dotted">
        <h1 className="w-full text-center text-2xl sm:text-4xl font-bold mt-24 underline ">
          <a className="bg-white py-4 px-8 rounded-xl " href="">
            Enhance You learning skill
          </a>
        </h1>
        <div className="cards w-full mt-16 p-2 justify-center flex flex-wrap gap-4">
          <div className="card1 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
            {" "}
            <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
              📖Interactive Courses
            </h1>
            <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
              Explore our interactive courses designed to make learning fun and
              engaging. Master new skills at your own pace with expert-led
              lessons.
              <Link
                to="/services"
                className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
              >
                Learn More →
              </Link>
            </p>
          </div>
          <div className="card9 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
            {" "}
            <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font rounded-t-2xl ">
              📝Quizzes & Assessments
            </h1>
            <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
              Test your knowledge with interactive quizzes and assessments.
              Track your progress and identify areas for improvement as you
              learn.
              <Link
                to="/courses"
                className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
              >
                Learn More →
              </Link>
            </p>
          </div>
          <div className="card3 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
            {" "}
            <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
              📚Expert-Led Tutorials
            </h1>
            <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
              Gain insights from industry experts through our comprehensive
              tutorials. Learn practical tips and strategies to excel in your
              field.
              <Link
                to="/services"
                className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
              >
                Learn More →
              </Link>
            </p>
          </div>
          {/* ///drawer */}
          <div className="drower flex flex-col gap-4">
            <button
              onClick={OnClickclose}
              className="w-full text-white bg-gray-800 py-2"
            >
              <h1 className="px-24">
                More Options
                {isOpen ? (
                  <i class="fa-solid fa-angle-right ps-3"></i>
                ) : (
                  <i class="fa-solid fa-angle-down ps-3"></i>
                )}{" "}
              </h1>
            </button>
            {isOpen && (
              <>
                <div className="card4 w-80 h-86 bg-gray-700 shadow-lg shadow-black rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🏅Certifications & Badges
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Earn certifications and digital badges as you complete
                    courses. Showcase your achievements and boost your
                    professional credibility.
                    <a
                      href="#"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>

                <div className="card5 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🤝Student Community
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Become part of a vibrant learning community. Connect with
                    fellow learners, exchange ideas, and grow together.
                    <a
                      href="#"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card6 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font rounded-t-2xl ">
                    🤖AI-Powered Learning Paths
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Get personalized learning paths tailored to your goals. Our
                    AI-driven recommendations ensure an effective and efficient
                    learning experience.
                    <a
                      href="#"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card7 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    📂Resources & eBooks
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Access a vast library of resources, including eBooks,
                    whitepapers, and research articles. Stay updated with the
                    latest industry trends.
                    <a
                      href="#"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card8 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🚀Career Guidance & Mentorship
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Take advantage of career coaching and mentorship programs.
                    Get expert advice and take the next step toward your dream
                    job.
                    <a
                      href="#"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card10 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🔨Project-Based Learning
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Apply what you learn through real-world projects. Gain
                    hands-on experience and build a portfolio to showcase your
                    skills.
                    <a
                      href="#"
                      className="mt-4   inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </a>
                  </p>
                </div>
                <div className="card2 w-80 h-86 bg-gray-700 shadow-lg shadow-black  rounded-xl">
                  {" "}
                  <h1 className=" bg-neutral-800 text-white text-3xl px-3 caveat-font  rounded-t-2xl">
                    🎤Live Workshops
                  </h1>
                  <p className="text-white p-4 h-full flex flex-col text-center text-2xl">
                    Join our live workshops and get hands-on experience with
                    real-world projects. Engage with instructors and peers in a
                    dynamic learning environment.
                    <Link
                      to="/services"
                      className="mt-4 inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-md transition"
                    >
                      Learn More →
                    </Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="page2 sm:hidden flex min-w-screen h-40 bg-orange-100 border-2 border-t-0 border-dotted  items-end">
        <p className="border-2 text-3xl border-neutral-400 border-dashed w-full h-24 border-e-0  border-s-0 border-b-0 flex justify-center items-center">
          <a className="font-bold text-neutral-700 roboto-bb" href="">
            {" "}
            Join our Courses
          </a>
        </p>
      </div>

      <div className="page2  min-w-screen min-h-screen bg-[#10162F] md:pb-4 ">
        <div className="1 w-full h-34 flex flex-col justify-center items-center">
          <p className="caveat-font text-3xl text-white">The platform</p>
          <p className="text-5xl slabo-27px-regular text-white">
            Hands-on learning
          </p>
        </div>
        <div className="2 w-full h-40 justify-end md:mt-26 flex">
          <img
            className="w-full md:w-190 bg-center p-3 rounded-3xl h-65 md:h-120 md:me-20"
            src={ImG}
            alt=""
          />
        </div>
        <div className="3 mt-32 md:ms-28 md:mt-0 w-full h-96 ">
          <div className="h-34 sm:w-96  bg-gray-600 rounded-[6px] text-white m-4 p-2">
            <h1 className="font-bold text-xl">AI-assisted learning</h1>
            <p className="text-[12px] pt-4">
              Make progress faster with our AI learning Assistant, tool that
              automatically understands your current course, instructions, amd
              solution code -- and gives you instant,personalized feedback.
            </p>
          </div>
          <p className="p-4 font-bold text-gray-400 font-mono">
            <a
              className="hover:bg-gray-600 px-3 md:pe-18 py-2 rounded-xl"
              href="#"
            >
              Real-world projects
            </a>
          </p>
          <p className="p-4 font-bold text-gray-400 font-mono">
            <a
              className="hover:bg-gray-600 px-3 md:pe-18 py-2 rounded-xl"
              href="#"
            >
              Job-readiness checker
            </a>
          </p>
          <p className="p-4 font-bold text-gray-400 font-mono">
            <a
              className="hover:bg-gray-600 px-3 md:pe-18 py-2 rounded-xl"
              href="#"
            >
              Interview simulator
            </a>
          </p>
          <p className="p-4 font-bold text-gray-400 font-mono">
            <a
              className="hover:bg-gray-600 px-3 md:pe-18 py-2 rounded-xl"
              href="#"
            >
              Assessments
            </a>
          </p>
        </div>
        <div className="4 w-full h-12  mt-3 flex justify-evenly">
          <button className="px-5 py-2 bg-yellow-500 text-white rounded-[4px]">
            Get started
          </button>{" "}
          <button className="text-yellow-500">Explore features</button>
        </div>
      </div>
      <div className="page3  min-w-screen h-180 md:h-screen bg-pink-50">
        <div className="main flex md:flex-row flex-col">
          <div className="w-full md:rounded-2xl md:w-350 md:mt-15 h-44 md:h-150 md:bg-transparent bg-amber-200">
            <video
              className="w-full md:ms-8 md:w-190 object-cover rounded-3xl md:h-130 h-70 p-4"
              src={Mpp4}
              width="1440"
              height="680"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="h-110 flex  flex-col justify-end">
            <div className="markazi-text-small text-2xl flex gap-1 ps-3  bg-pink-100">
              <IoSparklesOutline /> Powered by AI
            </div>
            <h1 className="text-5xl p-2 font-sans">
              Job-readiness checker{" "}
              <a
                className="text-[13px] px-3 py-1 rounded-2xl border-2 slabo-27px-regular"
                href="#"
              >
                beta
              </a>{" "}
            </h1>
            <p className="p-2 font-extralight">
              See how well your skills and experience match the job postings
              you’re interested in. Our job-readiness checker uses artificial
              intelligence to show you what you need to work on to qualify for a
              role.
            </p>
            <a className="w-full" href="#">
              <button className="mt-3 ms-3 px-5 py-2 rounded border-2 text-[#3A10E5]">
                Try now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="page420 w-full min-h-screen">
        <div className="cont1 w-full h-80 bg-[#3A10E5] md:flex md:items-center md:justify-evenly">
          <h1 className="text-6xl roboto-1 md:text-center text-white p-4">
            Join in on somting big
          </h1>
          <div className="flex md:gap-10 text-white font-bold text-4xl py-14 px-3 roboto-1 md:justify-evenly justify-between">
            <p className="flex flex-col">
              5 Cr+
              <a className="text-sm" href="#">
                Learners
              </a>{" "}
            </p>
            <p className="flex flex-col">
              190+{" "}
              <a className="text-sm" href="#">
                countries
              </a>
            </p>
            <p className="flex flex-col">
              300 Cr+{" "}
              <a className="text-sm" href="#">
                Code submits
              </a>
            </p>
          </div>
        </div>
        <div className="cont2 w-full md:h-105 h-153 bg-[#10162F] flex md:flex-row flex-col ">
          <div>
            <div className="logo w-67 h-24 text-white flex flex-col p-2 md:p-6">
              <h1 className="text-4xl">
                Eduvibe{" "}
                <a className="text-[11px] px-3 py-1.5 bg-white font-extrabold text-black">
                  Teams
                </a>{" "}
              </h1>
              <a className="">Enhance your learning</a>
            </div>
            <h1 className="text-4xl pb-5 p-2 lg:p-4 lg:ps-6 font-bold text-white">
              Equip your team with skills for today - and tomorrow
            </h1>
            <p className="text-[14px] p-3  pb-13 lg:p-7 text-white">
              Reach business and professional goals with technical training for
              your whole team
            </p>
            <a className="w-full p-2  lg:p-6 " href="#">
              <button className="px-4 py-2 bg-yellow-300 rounded">
                Explore business plans
              </button>
            </a>
          </div>
          <div>
            <div className="icons lg:mt-19 mt-8 p-2 w-full md:grid  md:gap-9 grid-cols-2 md:p-10 flex justify-between flex-wrap">
              <div className="icon text-neutral-400 text-4xl">
                <i class="fa-brands fa-airbnb"></i>airbnb
              </div>
              <div className="icon text-neutral-400 text-4xl me-12">
                <i class="fa-brands fa-amazon"></i>amazon
              </div>
              <div className="icon  text-neutral-400 text-4xl">dailymotion</div>
              <div className="icon  text-neutral-400 text-4xl caveat-font me-19">
                Reverb
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page4040 min-w-screen h-160 bg-[#6250ac]">
        <div className="w-full h-full flex flex-col md:flex-row md:items-center">
        <div className="flex w-full p-2  justify-center items-center">
        <div className="photo ms-24 hidden md:block h-60">
           <img className="w-75 h-75 photo2 bg-cover rounded-s-[90px] rounded-e-[0px] rounded-b-[0px]   outline-4 outline-offset-9 outline-dotted "/>
        </div>
        <div className="photo w-full h-90 flex justify-center items-center">
          <img className="w-75 h-75 photo1 bg-cover rounded-full  outline-4 outline-offset-9 outline-dotted "/>
        </div>
</div>
        <div className="cont text-white p-6 flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">Start for free</h1>
          <p className="pe-14 text-sm font-mono">If you're made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.</p>
        <Link className="w-full" to='/services'><button className="bg-[#33b248] px-3.5 py-2 rounded">Get now</button></Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
