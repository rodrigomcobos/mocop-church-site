import React, { useRef, useEffect } from 'react';

const GalleryContent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Load the Cloudinary script
        const script = document.createElement('script');
        script.src = 'https://product-gallery.cloudinary.com/all.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.cloudinary) {
                window.cloudinary.galleryWidget({
                    container: containerRef.current,
                    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                    aspectRatio: '16:9',
                    mediaAssets: [
                        { tag: 'mission-images' } // Use the tag you've added to your images
                    ],
                    carouselLocation: 'bottom',
                    carouselStyle: 'thumnails',
                    carouselOffset: 50,
                    carouselStyle: 'indicators',
                    thumbnailProps: { width: 100, height: 100, crop: 'fill', navigationArrows: 'always' }
                }).render();
            }
        };

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Nossa Galeria</h2>
            <div ref={containerRef} style={{ minHeight: '400px' }}></div>
        </div>
    );
};

export default GalleryContent;