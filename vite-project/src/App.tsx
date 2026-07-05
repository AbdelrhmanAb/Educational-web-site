import './App.css'

import { Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout'
import React from 'react';

const Home1 = React.lazy(() => import('./pages/home/home1'));
const AboutPage = React.lazy(() => import('./pages/about'));
const Instructors = React.lazy(() => import('./pages/instructor'));
const ProfilePage = React.lazy(() => import('./pages/profile'));
const LogIn = React.lazy(() => import('./pages/logIn'));
const SignUp = React.lazy(() => import('./pages/signUp'));

const EventsPage = React.lazy(() => import('./pages/events/events'));
const SingleEvent = React.lazy(() => import('./pages/events/SingleEvent'));
const EventSidebarPage = React.lazy(() => import('./pages/events/eventSidebar'));

const CoursesPage = React.lazy(() => import('./pages/courses/CoursesPage'));
const SingleCoursePage = React.lazy(() => import('./pages/courses/SingleCourse'));
const CoursesList = React.lazy(() => import('./pages/courses/coursesList'));
const CoursesSidbar = React.lazy(() => import('./pages/courses/coursesSidbar'));

const ContactPage = React.lazy(() => import('./pages/ContactPage'));

const BlogPage = React.lazy(() => import('./pages/blog/Blog'));
const SingleBlog = React.lazy(() => import('./pages/blog/SingleBlog'));

const Page404 = React.lazy(() => import('./pages/404'));
const App = () => {



  return (<>

    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home1 />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/instructor' element={<Instructors />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />

        <Route path='/event' element={<EventsPage />} />
        <Route path='/event/:id' element={<SingleEvent />} />
        <Route path='/event-rihgt-sidebar' element={<EventSidebarPage />} />

        <Route path='/course' element={<CoursesPage />} />
        <Route path='/course/:id' element={<SingleCoursePage />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-right-sidebar' element={<CoursesSidbar />} />


        <Route path='/contact' element={<ContactPage />} />


        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<SingleBlog />} />

        <Route path='*' element={<Page404 />} />

      </Route>
    </Routes>
  </>)
}

export default App
