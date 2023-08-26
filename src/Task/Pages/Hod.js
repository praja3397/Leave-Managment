// import { Box, Button, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hod() {
    const navigate = useNavigate()
    const staffData = JSON.parse(localStorage.getItem("leaves"))

    const handleApproved = (id) => {
        const finduser = staffData.find((a) => a.id === id)
        if (finduser) {
            const updateData = staffData.map((user) => {
                if (user.id === id) {
                    return { ...user, status: "Approved" }
                }
                return user
            })
            localStorage.setItem("leaves", JSON.stringify(updateData))
            navigate("/dashboard/hod")
        }
    }
    const handleReject = (id) => {
        const finduser = staffData.find((a) => a.id === id)
        if (finduser) {
            const updateData = staffData.map((user) => {
                if (user.id === id) {
                    return { ...user, status: "Rejected" }
                }
                return user
            })
            localStorage.setItem("leaves", JSON.stringify(updateData))
            navigate("/dashboard/hod")

        }
    }


    return (
        <>
            <div className="container">
                <div className="row my-4">
                    {staffData?.map((leaves) => {
                        return <div className="col-3 mb-4">
                            <div className='p-2 border'>
                                {/* <form> */}
                                <div>
                                    <h3>{leaves.fname} {leaves.lname}</h3>
                                    <p> Date:<br /> From {leaves.from} - To {leaves.to}  </p>
                                </div>

                                <div>
                                    <h3>Reason-</h3>
                                    <p>{leaves.reason}</p>
                                </div>

                                <div className="row ">
                                    {leaves.status === "Pending.." &&
                                        <>
                                            <div className="col-6 ">
                                                <button className='btn btn-success ' onClick={() => handleApproved(leaves.id)}> Approved </button>
                                            </div>
                                            <div className="col-6">
                                                <button className='btn btn-danger' onClick={() => handleReject(leaves.id)}>Rejected </button>
                                            </div>
                                        </>
                                    }
                                    {leaves.status==="Approved" &&
                                        <div>
                                            <h3 className='text-success'>Approved</h3>
                                        </div>
                                    }
                                    {leaves.status==="Rejected" &&
                                        <div>
                                            <h3 className='text-danger'>Rejected</h3>
                                        </div>
                                    }

                                </div>
                                {/* </form> */}
                            </div>

                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default Hod
