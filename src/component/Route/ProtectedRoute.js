import React from 'react'
import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../layout/loader/Loader';


const ProtectedRoute = ({isAdmin,children,...rest}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
 if(!loading){
  if(isAuthenticated==false){
    return <Navigate to="/login"/>
  }
  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return children
}
}

export default ProtectedRoute