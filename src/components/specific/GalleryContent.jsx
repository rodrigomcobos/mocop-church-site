import React, { useState, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const GalleryContent = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const cld = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }
    });

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
                const tag = 'mission-images'; // Use the tag you've added to your images

                // Fetch the list of images with the specific tag
                const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`);

                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data.resources);
            } catch (err) {
                console.error('Error fetching images:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (isLoading) {
        return <div className="text-center py-8">Carregando...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">Erro: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Nossa Galeria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <div key={image.public_id} className="overflow-hidden rounded-lg shadow-lg">
                        <AdvancedImage
                            cldImg={cld.image(image.public_id)
                                .resize(thumbnail().width(300).height(200).gravity(autoGravity()))
                                .format('auto')
                                .quality('auto')}
                            className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryContent;