import React from "react"
import { Navigate } from "react-router-dom"



function ProtectedRoutes({children, allowedRoles}){
    const protect  =JSON.parse( localStorage.getItem("login"))
    let auth={role:protect.role}
    return(
        <>
            {auth.role===allowedRoles ? children : <Navigate to="/login" replace/>}
        </>
    )
}

export default ProtectedRoutes