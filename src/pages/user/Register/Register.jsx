import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';

export default function Register() {
  const [isLoading ,setisLoading]=useState(false)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate=useNavigate()
const [Servererror,setServererror]=useState("")
  const registerUser = async (value) => {
setisLoading(true)
    try {
      const response = await axios.post(
        'https://ecommerce-node4.onrender.com/auth/signup',
        value
      );
      if (response.status===201) {
        toast.info('please check your email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
        navigate('/auth/Login')
      }
      console.log(response.data);
    } catch (error) {
      if (error.response.status===409)
        {
        toast.info(' email already use ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
          setServererror('email is already use')
        
      }
     else{
        toast.info(`${error.response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
        setServererror(error.response.data.message)
      } 
    }finally{
      setisLoading(false)
    }
  };

  return (
    <div className="bg-secondary vh-100 d-flex align-items-center justify-content-center">
      {/* {Servererror?<div className='text-danger'>{Servererror}</div>:''} */}
      <Form
        className="w-50 bg-white p-4 rounded shadow-sm"
        onSubmit={handleSubmit(registerUser)}
      >
        <h3 className="text-center mb-4">Register</h3>

        {/* Username Field */}
        <FloatingLabel controlId="floatingInputUserName" label="Username" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your username"
            {...register('userName', { required: 'Username is required' })}
          />
          {errors.userName ?
            <div className="text-danger">{errors.userName.message}</div>
          :null}
        </FloatingLabel>

        {/* Email Field */}
        <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
          {errors.email ?
            <div className="text-danger">{errors.email.message}</div>:null
          }
        </FloatingLabel>

        {/* Password Field */}
        <FloatingLabel controlId="floatingInputPassword" label="Password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            {...register('password',
             {
              required: 'Password is required',
            })}
          />
          {errors.password ?
            <div className="text-danger">{errors.password.message}</div>:null
          }
        </FloatingLabel>

        <Button variant="primary" type="submit" className="w-50 text-center" disabled={isLoading}>
          {isLoading?'Loading...':'Register'}
        </Button>
      </Form>

      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </div>
  );
}
