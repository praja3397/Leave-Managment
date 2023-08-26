import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DEPARTMENT } from '../Constant/Constant'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
function Register() {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    role: 'hod',
    fname: '',
    lname: '',
    email: '',
    contact: '',
    department: '',
    username: '',
    password: ''
  })
  const userdata = JSON.parse(localStorage.getItem('user'))
  const [data, setData] = useState(userdata || [])

  const [error, setError] = useState(true)

  const handleChange = (e) => {
    console.log(e)
    setFormdata((prev) => ({ ...prev, id: uuidv4(), [e.target.name]: e.target.value }))
  }

  const sameUser = userdata?.find((same) => same.username === formdata.username)
  useEffect(() => {
    if (sameUser) {
      setError(true)

    } else {
      setError(false)
    }
  }, [sameUser]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!error) {
      setData([...data, formdata])
      const user = [...data, formdata]
      localStorage.setItem('user', JSON.stringify(user))
      setFormdata({
        role: 'hod',
        fname: '',
        lname: '',
        email: '',
        contact: '',
        department: '',
        username: '',
        password: ''
      })
      navigate("/login")
    }else{
      alert("Please Enter Another Username")
    }

  }

  const handleclick = (e) => {
    navigate('/login')
  }
  console.log(data);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
          </div>
          <div className='col-6 border p-4 mt-4 shadow'>
            <form onSubmit={handleSubmit}>
              <div className='col-12'>
                <FormControl>
                  <RadioGroup row name='role' defaultValue="hod">
                    <FormControlLabel value="hod" control={<Radio />} label="Hod" onChange={handleChange} />
                    <FormControlLabel value="staff" control={<Radio />} label="Staff" onChange={handleChange} />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='row'>
                <div className='mb-3 col-6' >

                  <div className="form-group ">
                    <label >First Name</label>
                    <input className="form-control" type="text" name='fname' value={formdata.fname} required onChange={handleChange} />
                  </div>
                </div>

                <div className='mb-3 col-6'>
                  <div className="form-group ">
                    <label >Last Name</label>
                    <input className="form-control" type="text" name='lname' value={formdata.lname} required onChange={handleChange} />
                  </div>
                </div>

                <div className='mb-3 col-6' >
                  <div className="form-group ">
                    <label >Email</label>
                    <input className="form-control" type="email" name='email' value={formdata.email} required onChange={handleChange} />
                  </div>
                </div>

                <div className='mb-3 col-6' >
                  <div className="form-group ">
                    <label >Contact</label>
                    <input className="form-control" type="number" name='contact' value={formdata.contact} required onChange={handleChange} />
                  </div>
                </div>

                <div className='mb-3 col-6'>
                  <div className='form-group '>
                    <label>Department</label>
                    <FormControl size='small' fullWidth>
                      <Select
                        name='department'
                        label='department'
                        value={formdata.department}
                        onChange={handleChange}
                        required
                      >
                        {DEPARTMENT.map((Item) => {
                          return <MenuItem value={Item}>{Item}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='mb-3 col-6' >
                  <div className="form-group ">
                    <label >Username</label>
                    <input className="form-control" type="text" name='username' value={formdata.username} required onChange={handleChange} />
                    {error && <h5 className='text-danger'>Username Exist</h5>}
                  </div>
                </div>
                <div className='mb-3 col-6' >
                  <div className="form-group ">
                    <label >Password</label>
                    <input className="form-control" type="password" name='password' value={formdata.password} required onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className='col-12 text-center mt-3 mb-3'>
                <Button fullWidth variant="contained" className='mb-3' type='submit'>Register</Button>
                <span> Already Registered? <Button onClick={handleclick}>LogIn</Button></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register