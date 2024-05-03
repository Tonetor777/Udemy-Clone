import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses, Login, SignUp, InstProfile} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
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
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/InstProfile" element = {<InstProfile />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
  );
}

export default App;
