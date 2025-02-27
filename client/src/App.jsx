import React from 'react';
import Home from './pages/Home';
import Services from './pages2/services';
import Contact from './pages/Contact';
import Admin from './components/layouts/admin'
import Login from './pages/Login';
import Landingpage from './components/landingpage';
import Logout from './pages/logout';
import Courses from './pages/Courses'; 
import Nopage from './pages/Nopage';
import Navbar from './components/Navbar';
import AdminUsers from './pages2/AdminUsers';
import AdminUpdate from './pages2/AdminUpdateuesr';
import ReactQuiz from './quizs/reactquiz';
import Jsquiz from './quizs/jsquiz'
import AdminContacts from './pages2/AdminContacts'
import Signup from './pages/Signup';
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Landingpage/>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />}/>
          <Route path='/react' element={<ReactQuiz />}/>
          <Route path='/js' element={<Jsquiz />}/>
          
          <Route path='*' element={<Nopage />} />
         
         <Route path='/admin' element={<Admin/>}>
          <Route path='users' element={<AdminUsers/>}/>
           <Route path='contacts' element={<AdminContacts/>}/>
           <Route path='users/:id/edit' element={<AdminUpdate/>}/>
         </Route>
        </Routes>
          </Router>
    </>
  );
}

export default App;
