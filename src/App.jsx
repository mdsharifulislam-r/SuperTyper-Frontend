import React from 'react'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import aos from "aos"
import { RouterProvider } from 'react-router-dom';
import router from './RouterAndTemplate/Router/Router';
import Loader from './components/Loader/Loader';
import "aos/dist/aos.css"
const App = () => {
  aos.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-sine',
    delay: 100,
  })
  return (
    <>
      <Loader/>
      <RouterProvider router={router}/>
      <ToastContainer
    position='top-center'
      />
    </>
  );
}

export default App
