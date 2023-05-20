import React, { useState } from 'react';
import ModalForInput from './ModalForInput';

const ImageUpload = () => {
    const [uploadedImage, setUploadedImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleImageUpload = (imageUrl) => {
        setUploadedImage(imageUrl);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Image Upload Example</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleOpenModal}
            >
                Add Image
            </button>

            {uploadedImage && (
                <div className="mt-4 w-full mx-auto">
                    <img src={uploadedImage} alt="Uploaded" className="w-4/6" />
                </div>
            )}

            {isModalOpen && (
                <ModalForInput
                    onClose={handleCloseModal}
                    onImageUpload={handleImageUpload}
                />
            )}
        </div>
    );
};

export default ImageUpload;
