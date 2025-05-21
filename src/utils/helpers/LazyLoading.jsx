import React, { useState, useEffect, useRef } from 'react';

const LazyLoadImage = ({ src, alt, className = '', placeholder = null }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            setIsLoaded(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (imgRef.current) {
                        imgRef.current.loading = 'lazy';
                        imgRef.current.src = src;
                        imgRef.current.onload = () => {
                            setIsLoaded(true);
                            observer.unobserve(entry.target);
                        };
                    }
                }
            });
        });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [src]);

    return (
        <div className={`relative ${className}`}>
            {!isLoaded && placeholder && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    {placeholder}
                </div>
            )}
            <img
                ref={imgRef}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default LazyLoadImage;