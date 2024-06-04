import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

interface Props {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<Props> = ({ children }): React.ReactElement => {
  const { token, loading } = useContext(AuthContext);
  const [localToken, setLocalToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setLocalToken(token);
    }
  }, [token]);

  if (!localToken) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
