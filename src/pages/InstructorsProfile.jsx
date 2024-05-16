import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultpic from '../assets/images/defaultpic.jpg';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-20 h-full bg-orange-500 p-10">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white">Profile</Link>
        </li>
        <li>
          <Link to="/settings" className="text-white">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

const FileUploadComponent = ({ handleFileChange, handleFileUpload, uploadedFile }) => {
  const [error, setError] = useState(null);
 
console.log({uploadedFile});
  return (
    <>
      <div className="course-card pl-[200px] h-[700px] w-[700px]">
        <button>Manage course</button>
        <div className='flex'>
          <div>
            <img src={defaultpic} alt='default-pic' className='js-image-upload-preview h-[100px] w-[100px]'/>
          </div>
          <div className="course-card">
            <h2>Course Title 1</h2>
            <p>Course description 1...</p>
          </div>
        </div>
        <div className="file-upload">
          <form  name='file' id='file' encType="multipart/form-data">
            <input type="file" name="file" onChange={handleFileChange} />
            <button type='submit' name='submit' onClick={handleFileUpload}>Upload File</button>
            {/* {uploadedFile && <p>Uploaded File: <img src={uploadedFile}/></p>}
            {error && <p>{error}</p>} */}
            
          </form>
        </div>
      </div>
    </>
  );
};

function InstructorsProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  console.log(formData);
      fetch('http://localhost:8004/UDEMY/PHP/upload.php', {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((formData) => {
        if (!formData) {
          throw new Error('No data received from the server');
        }
        
        setUploadedFile(formData); // Assuming 'success' is the key in the response object containing the file URL
        alert("Your file has been uploaded successfully!");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };
  
  
  return (
    <div className="app">
      <Navbar />
      <FileUploadComponent
        handleFileChange={handleFileChange}
        handleFileUpload={handleFileUpload}
        uploadedFile={uploadedFile}
      />
    </div>
  );
}

export default InstructorsProfile;
