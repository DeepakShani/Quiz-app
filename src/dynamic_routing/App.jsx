import React from 'react'
// import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Post from './Post'
import PostDetails from './PostDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        children:[{
            path:'/',
            element:<Home/>
        }
    ,
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/post',
        element:<Post/>
    }
]
},
])
const App = () => {
  return (
    <RouterProvider router={router}/>
    // <BrowserRouter>
    
    // <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/about' element={<Post/>}/>
    //     <Route path='/post' element={<About/>}/>
    //     <Route path='/post/:id' element={<PostDetails/>}/>
    // </Routes>
    // </BrowserRouter>
  )
}

export default App
