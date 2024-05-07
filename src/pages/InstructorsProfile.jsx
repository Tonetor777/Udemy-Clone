import React from 'react';
import './InstructorsProfile.css';

const Navbar = (
) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#">Udemy</a>
        <ul className="navbar-links">
          <li>Instructor</li>
          <li>Courses</li>
          <li>Students</li>
          <li>Performance</li>
          <li>Communications</li>
        </ul>
      </div>
    </nav>
  );
};

// Footer component
const Footer = (
) => {
  return (
    <footer className="footer">
      <p>Udemy© 2023</p>
    </footer>
  );
};

// CourseCards component
const CourseCards = (
) => {
  return (
    <div className="course-cards">
      <div className="course-card">
        <h2>Course Title 1</h2>
        <p>Course description 1...</p>
        <button>Manage course</button>
      </div>
      <div className="course-card">
        <h2>Course Title 2</h2>
        <p>Course description 2...</p>
        <button>Manage course</button>
      </div>
    </div>
  );
};

function InstructorsProfile(
) {
  return (
    <div className="app">
      <Navbar />
      <CourseCards />
      <Footer />
    </div>
  );
}

export default InstructorsProfile;
