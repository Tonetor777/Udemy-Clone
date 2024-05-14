import React, { useState } from 'react';
import './InstructorsProfile.css';

const Navbar = () => {
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

const Footer = () => {
  return (
    <footer className="footer">
      <p>Udemy© 2023</p>
    </footer>
  );
};

const CourseCards = () => {
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

function InstructorsProfile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://localhost:8003/UDEMY/PHP/upload.php', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
           
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="app">
      <Navbar />
      <CourseCards />
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload File</button>
      </div>
      <Footer />
    </div>
  );
}

export default InstructorsProfile;
