import React,{useContext} from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { Navigate, useLocation } from 'react-router-dom';
import  { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    let location = useLocation();
   if(loading){
    return<div className='d-flex  justify-content-center'> <Spinner  animation="grow" variant="info" />  </div> 
   }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;