'use client'
import Loader from '@/Components/Loader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone'

const page = () => {
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
        <div className='py-36 px-12 md:px-20 xl:px-32 gap-12 flex items-center justify-between flex-col lg:flex-row w-screen'>
            <div className='w-full lg:w-1/3 h-full flex flex-col items-center justify-center'>
                <h1 className="text-3xl font-bold text-center ">Upload an image</h1>
                <h2 className='text-xl font-semibold text-center mb-4'>to detect plant diseases</h2>
                <Dropzone onDrop={handleChange}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className='w-full h-[24rem] bg-[#EAEAEA]/60 rounded-xl p-6 border flex items-center justify-center aspect-square flex-col text-zinc-600'>
                                    {previewUrl ? (
                                        <img src={previewUrl} alt="Preview" className='w-full rounded-lg aspect-auto object-contain' />
                                    ) : (
                                        <>
                                            <ImageIcon className="h-12 w-12" />
                                            <p className=' text-center'>Drag 'n' drop some files here, or click to select files</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {previewUrl && <button onClick={handleSubmit} className='mt-6 px-10 py-3 text-white bg-black rounded-full'>Submit</button>}
            </div>
            <div className='hidden lg:block mt-16 text-gray-600/60'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </div>
            <div className='w-full lg:w-1/2 h-[36rem] flex items-center justify-center gap-3 flex-col'>
                <h1 className='text-4xl font-bold text-center'>Result</h1>
                <div className='w-full h-full bg-[#eaeaeac4] rounded-3xl relative'>
                    {loading && <p className='w-full h-full absolute left-0 top-0 bg-[#eaeaeac4] rounded-3xl flex items-center justify-center'>
                        <Loader />
                    </p>}
                    {!loading && Object.keys(diseaseInfo).length > 0 ? (
                        <div className='w-full h-full p-10 flex items-start justify-center flex-col gap-6 text-lg '>
                            {diseaseInfo.name.includes('Healthy') ? (
                                <>
                                    <span className='w-full flex items-center justify-center'>
                                        <img src="healthyStamp.jpg" alt="" className='w-32 mix-blend-multiply' />
                                    </span>
                                    <p className='text-2xl text-center text-[#47A62F]'>Great news! Your plant is healthy and free from diseases. Keep up the good care!</p>
                                </>
                            ) : (
                                <>
                                    <span className='w-full flex items-center justify-center'>
                                        <img src="diseased.jpg" alt="" className='w-32 mix-blend-multiply' />
                                    </span>
                                    <h3><strong>Disease Name:</strong> {diseaseInfo.name}</h3>
                                    <p><strong>Symptoms:</strong> {diseaseInfo.symptoms}</p>
                                    <p><strong>Management:</strong> {diseaseInfo.management}</p>
                                </>
                            )}

                        </div>
                    ) : (
                        <div className='w-full h-full p-10 flex items-center justify-center text-zinc-600'>
                            <p>No result to display. Upload an image to show the result.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;


function ImageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    )
}