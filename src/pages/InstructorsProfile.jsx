import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import default2 from '../assets/images/default2.jpg';
import Side from '../components/Side';
import Download from '../components/Download';


const FileUploadComponent = ({ handleFileChange, handleFileUpload, uploadedFile }) => {


  console.log({ uploadedFile });

  return (
    <>
    <div className="  pl-[7px] mt-20 mr-[100px]    ml-[150px]">
     <div className='font-bold text-2xl ml-0'>Manage course</div></div>
      <div className="    mt-5 mr-[100px]  mb-20 ml-[150px] border border-gray-500 ">

        <div className='flex pt-2'>
          <div>
            <img src={default2} alt='default-pic' className='js-image-upload-preview h-[300px] w-[900px]'/>
          </div>
          <div className="    pl-[200px] ">
            <h2 className="   pb-5 font-bold  ">Create an Engaging Course </h2>
            <p className="   pb-5    "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae nulla eligendi eius blanditiis harum repudiandae molestias, 
              et dolore iure officia, architecto nostrum quas aliquid? Corrupti laborum est soluta quisquam?</p>
          
          <form name='file' id='file' encType="multipart/form-data">
            <input type="file" name="file" onChange={handleFileChange} />

            <button type='submit' name='submit' className='text-orange-400 hover:text-gray-700 underline p-3 ' onClick={handleFileUpload}>Upload File</button>
          </form>
          </div>
        </div>
        <div className="   ">
         
          {/* {uploadedFile && <p>Uploaded File: <img src={uploadedFile} alt="Uploaded" /></p>} */}
         
        </div>
      </div>
    </>
  );
};

function InstructorsProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://localhost:8000/UDEMY/PHP/upload.php', {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Get raw text response for debugging
      })
      .then((responseText) => {
        try {
          const jsonResponse = JSON.parse(responseText);
          setUploadedFile(jsonResponse);
          alert("Your file has been uploaded successfully!");
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
          console.error('Server response:', responseText); // Log the raw response for debugging
          setError(jsonError,'Failed to parse server response. Check the console for more details.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('File upload failed. Check the console for more details.');
      });
    }
  };

  return (
    <div className="app">
    
      <Side /> 
      <Download/>
      <FileUploadComponent
        handleFileChange={handleFileChange}
        handleFileUpload={handleFileUpload}
        uploadedFile={uploadedFile}
        error={error} 
      />  
      {error && <p>{error}</p>}
      
    </div>
  );
}

export default InstructorsProfile;
