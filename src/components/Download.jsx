import React, { useEffect, useState } from 'react';

const Download = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/UDEMY/PHP/getFiles.php')  
      .then(response => response.json())
      .then(data => {
        setFiles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto mt-5 ml-40 mb-10">
      <h2 className="text-2xl font-bold mb-5">Uploaded Files</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">File Name</th>
              <th className="py-2 px-4 border-b">File Size</th>
              <th className="py-2 px-4 border-b">File Type</th>
              <th className="py-2 px-4 border-b">Download</th>
            </tr>
          </thead>
          <tbody>
            {files.length > 0 ? (
              files.map(file => (
                <tr key={file.id}>
                  <td className="py-2 px-4 border-b">{file.filename}</td>
                  <td className="py-2 px-4 border-b">{file.filesize} bytes</td>
                  <td className="py-2 px-4 border-b">{file.filetype}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={`http://localhost:8000/UDEMY/PHP/uploads/${file.filename}`} className="text-blue-500 hover:underline" download>
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 border-b text-center">No files uploaded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Download;
