import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      duration: "10 hours",
      level: "Beginner",
      rating: 4.5,
      image: "https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.jpeg",
      check:'/react'
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "no name",
      duration: "15 hours",
      level: "Advanced",
      rating: 4.8,
      image: "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y",
     check:'/js'
    },
    {
      id: 3,
      title: "Python",
      instructor: "no name",
      duration: "12 hours",
      level: "Intermediate",
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdRsbNblY-trvVBgVFHyP_g2Lrz9dLP3k7Q&s",
     check:'/react'
    },
    {
      id: 4,
      title: "Kotlin",
      instructor: "no name",
      duration: "15 hours",
      level: "Advanced",
      rating: 4.8,
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGRQ1BBEKdHEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702452656552?e=2147483647&v=beta&t=6Rk4dMmFsHGyr2Gh-E0RqTsiJTI2vX6XvZ94li_uuCU",
    check:'/react'
    },
    {
      id: 5,
      title: "Java",
      instructor: "no name",
      duration: "15 hours",
      level: "Advanced",
      rating: 4.8,
      image: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon.png?w=360",
     check:'/react'
    },
    {
      id: 6,
      title: "Advance C",
      instructor: "no name",
      duration: "15 hours",
      level: "Intermediate",
      rating: 4.8,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",
     check:'/react'
    },
    {
      id: 7,
      title: "Advance C++",
      instructor: "no name",
      duration: "9 hours",
      level: "Advanced",
      rating: 4.1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
     check:'/react'
    },
    {
      id: 8,
      title: "HTML & CSS",
      instructor: "no name",
      duration: "3 hours",
      level: "Beginner",
      rating: 4.2,
      image: "https://provincesoft.com/wp-content/uploads/2022/10/html-css-1000x570.webp",
     check:'/react'
    },
    {
      id: 9,
      title: "Ruby",
      instructor: "no name",
      duration: "16 hours",
      level: "Advanced",
      rating: 4.1,
      image: "https://sumatosoft.com/wp-content/uploads/2023/03/ruby-lang-ar21.png",
     check:'/react'
    },
    {
      id: 10,
      title: "Tailwind CSS",
      instructor: "No name",
      duration: "5 hours",
      level: "Advanced",
      rating: 4.3,
      image: "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp",
     check:'/react'
    },
    {
      id: 11,
      title: "BootStrap",
      instructor: "No name",
      duration: "3 hours",
      level: "Beginner",
      rating: 3.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVOtPjeWtB39bOsOoOWso3HTiaEF2szC8jA&s",
    check:'/react'
    },
    {
      id: 12,
      title: "Node Js",
      instructor: "No name",
      duration: "13 hours",
      level: "Intermediate",
      rating: 4.4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&s",
     check:'/react'
    },
    {
      id: 12,
      title: "Express Js",
      instructor: "Rrgag",
      duration: "11 hours",
      level: "Intermediate",
      rating: 4.3,
      image: "https://miro.medium.com/v2/resize:fit:1400/1*DAIoObWqwP2P-EMJjBEdqQ.png",
     check:'/react'
    },
  ];
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCourses = courses.filter((course) =>
    (filter === "All" || course.level === filter) &&
    course.title.toLowerCase().includes(search.toLowerCase())
  );
return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Courses <s className='text-green-500 font-extralight'>check some quiz qustions</s></h2>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full rounded-lg shadow-sm"
        />
        <select
          className="border p-2 rounded-lg shadow-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-500">Duration: {course.duration}</p>
            <p className="text-gray-500">Level: {course.level}</p>
            <p className="text-yellow-500 mb-1">⭐ {course.rating}</p>
           <Link className='w-full' to={course.check}><p className="px-4 py-1.5 bg-blue-600 rounded-[6px] w-26"> click here</p></Link> 
          </div>
        ))}
      </div>
    </div>



      <Footer/>
    </>
  );
}

export default Courses;