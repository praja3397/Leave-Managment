import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/router'
import "./Style.css"

function Main() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Main
