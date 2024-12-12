import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'

const App = () => {

  const endpoints = createBrowserRouter([
    {
      path : '/',
      element : <> <Navbar/> </>
    }
  ])

  return (
    <div>
      <RouterProvider router={endpoints} ></RouterProvider>
    </div>
  )
}

export default App
