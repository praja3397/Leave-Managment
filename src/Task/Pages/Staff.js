import { Box, Button, FormControl, FormLabel, Modal, TextField, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'

function Staff() {
  const [pop, setPop] = useState(false)
  const [data, setData] = useState({
    from: "",
    to: "",
    reason: ""
  })
  const staffData = JSON.parse(localStorage.getItem("leaves"))
  const [form, setForm] = useState(staffData || [])
  const login= JSON.parse(localStorage.getItem("login"))
  const handleChange = (e) => {
    console.log(e.target.value);
    setData((prev) => ({ ...prev, id: uuidv4(), status: "Pending..",fname:login.fname, lname:login.lname, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm([...form, data])
    localStorage.setItem("leaves", JSON.stringify([...form, data]))
    setData({
      from: "",
      to: "",
      reason: ""
    })
    setPop(false)
  }
  console.log(form);

  const approved=staffData?.filter((approve)=>approve.status === "Approved")
  const rejected=staffData?.filter((reject)=>reject.status === "Rejected")

  return (
    <>
      {/* <div class='text-center mt-5 ' >Not Applied Any Leave Yet...!</div> */}
      <div className='text-center'>
        <Button type="submit" class="btn btn-success my-5" onClick={() => setPop(true)} > +Apply Leave</Button>
      </div>
      <Modal open={pop}
        onClose={() => setPop(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4

        }}>
          <form onSubmit={handleSubmit}>
            <Typography sx={{ fontSize: 14, mb: 2 }} >
              Leave Details
            </Typography>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel >From </FormLabel>
              <TextField type='date' name='from' value={data.from} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ ml: 2, mb: 2 }}>
              <FormLabel >To </FormLabel>
              <TextField type='date' name='to' value={data.to} onChange={handleChange} />
            </FormControl>

            <FormControl fullWidth>

              <FormLabel>Reason</FormLabel>
              <TextField type='text' name='reason' multiline minRows={3} value={data.reason} onChange={handleChange} />
            </FormControl>
            <div className='d-flex justify-content-end'>
              <Button onClick={() => setPop(false)}>Cancel</Button>
              <Button type='submit'>Submit</Button>
            </div>


          </form>

        </Box>
      </Modal>
      <div className="container">
        <div className='d-flex justify-content-center text-center'>
          <span>
            <h3>{staffData ? staffData.length :0}</h3>
            <h3>Total</h3>
          </span>
          <span className='mx-5'>
            <h3>{approved?.length}</h3>
            <h3>Approved</h3>
          </span>
          <span>
            <h3>{rejected?.length}</h3>
            <h3>Rejected</h3>
          </span>
        </div>
        <div className="row my-4">
          {staffData?.map((user) => {
            return <div className="col-3 mb-4 col-lg-4 col-md-6 col-sm-12">
              <div className='border p-2'>
                <h3>{user.fname} {user.lname}</h3>
                <p> Date: <br /> From:{user.from} - To:{user.to}</p>
                <h3>Reason</h3>
                <p>{user.reason}</p>
                <h3>Status</h3>
                {user.status==="Pending.." &&
                  <h4 className='text-info'>Pending..</h4>
                }
                {user.status==="Approved" &&
                  <h4 className='text-success'>Approved</h4>
                }
                {user.status==="Rejected" &&
                  <h4 className='text-danger'>Rejected</h4>
                }
              </div>

            </div>
          })}

        </div>
      </div>

    </>
  )
}

export default Staff
