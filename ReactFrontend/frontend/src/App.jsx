import { useState } from 'react'
import {Route, createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Student from './Pages/Student'
import Staff from './Pages/Staff'
import Subject from './Pages/Subject'
import Root from './RootLayout/Root'


function App() {
  
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home/>} />
        <Route path='student' element={<Student/>} />
        <Route path='staff' element={<Staff/>} />
        <Route path='subject' element={<Subject/>} />
      </Route>
    )

  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
