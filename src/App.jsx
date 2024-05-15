import './App.css';
import React from 'react';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses, Login, SignUp, InstProfile} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from "./components/checkout/checkout";
function App() {
  return (
    <AuthProvider>
    <SidebarProvider>
    <CoursesProvider>
      <CartProvider> 
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path="/cart" element={
        <ProtectedRoute><Cart /></ProtectedRoute>
        } />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/InstProfile" element = {<InstProfile />} />
        <Route path = "/check" element = {<Checkout />} />
       
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
  </AuthProvider>
  );
}

export default App;
