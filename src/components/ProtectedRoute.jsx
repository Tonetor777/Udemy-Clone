// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    
        isAuthenticated ? (
          children
        ) : (
          navigate("/login")
        )
  );
};

export default ProtectedRoute;
