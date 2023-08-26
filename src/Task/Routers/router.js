import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Dashboard from "../Pages/Dashboard";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Hod from "../Pages/Hod"
import Staff from "../Pages/Staff"
import ProtectedRoutes from "./Layout/ProtectedRoutes";

export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="login" element={<LogIn/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard/hod" element={
                <ProtectedRoutes allowedRoles={"hod"}>
                    <Hod/>
                </ProtectedRoutes>
            }/>
            <Route path="dashboard/staff" element={
                 <ProtectedRoutes allowedRoles={"staff"}>
                 <Staff/>
             </ProtectedRoutes>
            }/>
        </Route>
    )
    )