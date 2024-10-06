import React from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';

const GalleryContent = () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const publicId = 'test_img';

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Teste de Imagem Única</h2>
            <div className="flex justify-center">
                <CloudinaryContext cloudName={cloudName}>
                    <Image
                        publicId={publicId}
                        width="300"
                        crop="scale"
                        alt="Test Image"
                    />
                </CloudinaryContext>
            </div>
        </div>
    );
};

export default GalleryContent;