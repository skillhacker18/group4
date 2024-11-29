// src/components/Upload.js
import "../assets/css/upload.css";
import React, { useState } from 'react';



export function Upload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file before uploading.');
            return;
        }

        const formData = new FormData();
        formData.append('Design-image', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert('File uploaded successfully!');
        })
        .catch(error => {
            alert('Error uploading file.');
        });
    };

    return (
        <div className="upload-page">
            <div className="logo">
                <img src="oneil logo.jpg" alt="Vivid Printing Logo" style={{ maxWidth: '200px', borderRadius: '10px' }} />
            </div>
            <div className="upload-section">
                <h2>Upload Your Design Image</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        type="file"
                        name="Design-image"
                        accept=".jpeg, .jpg, .png"
                        onChange={handleFileChange}
                        required
                    />
                    <br /><br />
                    <button type="submit" className="upload-button">Upload</button>
                </form>
            </div>
        </div>
    );
}


