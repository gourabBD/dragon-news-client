import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from 'react-hot-toast';

//navigate or redirect

const Login = () => {
  const [error,setError]=useState('')
  const { signIN,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()

  const from=location.state?.from?.pathname ||'/'

  const handleLogin = (event) => {
   
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signIN(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        form.reset();
        setError('')
        if(user.emailVerified){
          navigate(from, { replace: true });
        }
        else{
          toast.error('Your email is not verified yet!')
        }
      })
      .catch((error) => {
        console.error(error)
        
        setError(error.message)
      })
      .finally(()=>{
        setLoading(false)
      })
  };
  return (
    <Form onSubmit={handleLogin} className="m-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div>

      <Form.Text className="text-danger"> {error}</Form.Text>
      </div>
    </Form>
  );
};

export default Login;
