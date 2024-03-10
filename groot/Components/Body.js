'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone'

const Body = () => {
    const [diseaseInfo, setDiseaseInfo] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            console.log("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            setLoading(true);
            const res = await axios.post('http://127.0.0.1:3000/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = res.data;
            setDiseaseInfo(data.disease);
        } catch (err) {
            console.error("Error uploading image:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-12 md:px-20 xl:px-40 gap-12 flex items-center justify-between flex-col lg:flex-row min-h-screen w-screen'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <Dropzone onDrop={handleChange}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className='w-full h-[24rem] p-6 border flex items-center justify-center aspect-square flex-col'>
                                    {previewUrl ? (
                                        <img src={previewUrl} alt="Preview" className='aspect-square object-cover' />
                                    ) : (
                                        <p className=' text-center'>Drag 'n' drop some files here, or click to select files</p>
                                    )}
                                </div>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {previewUrl && <button onClick={handleSubmit} className='mt-6 px-6 py-3 rounded text-white bg-blue-500'>Submit</button>}
            </div>
            {loading && <p>Loading...</p>}
            {!loading && Object.keys(diseaseInfo).length > 0 && (
                <div className='w-full h-full p-2 flex items-start justify-center flex-col gap-6 text-lg'>
                    <h3><strong>Disease Name:</strong> {diseaseInfo.name}</h3>
                    <p><strong>Symptoms:</strong> {diseaseInfo.symptoms}</p>
                    <p><strong>Management:</strong> {diseaseInfo.management}</p>
                </div>
            )}
        </div>
    );
};

export default Body;
