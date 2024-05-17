import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Informations from "../pages/informations/informations";
import { AuthProvider } from "../provider/AuthProvider";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/informations"
            element={
              <ProtectedRoute>
                <Informations />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
