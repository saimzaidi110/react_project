import { useContext, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PremiumPage from './pages/PremiumPage'
import BlogPage from './pages/BlogPage'
import ContactusPage from './pages/ContactusPage'
import MainDashboard from './pages/maindashboard'
import ProfilePage from './pages/ProfilePage'
import SettingPage from './pages/SettingPage'
import HelpPAge from './pages/HelpPAge'
import Dashboard from "./pages/dashboard";
import SignupPage from "./pages/SignupPage"
import { UserContext } from './context/UserContext'
import UserPage from './pages/UserPage'
import Productpages from './pages/Productpages'
function App() {
  const {user}= useContext(UserContext)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/contact',
      element: <ContactusPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/premium',
      element: <PremiumPage />
    },
    {
      path: '/blog',
      element: <BlogPage />
    },
    {
      path: '/dashboard',
      element: <MainDashboard />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        },
        {
          path:'users',
          element: <UserPage/>
        },
         {
          path:'products',
          element: <Productpages/>
        },
        {
          path: 'setting',
          element: <SettingPage />
        },
        {
          path: 'help',
          element: <HelpPAge />
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
