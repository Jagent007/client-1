import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

interface Props {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<Props> = ({ children }): React.ReactElement => {
  const { token, loading } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
