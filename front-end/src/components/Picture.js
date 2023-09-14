import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { fetchImageJson } from  '../utils/s3API';

function PictureDisplay({assetBucket}) {
    const [images, setImages] = useState(null);
    const settings = {
        // Essential settings
        vertical: true,
        verticalSwiping: true,
        
        // Optional settings
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchImageJson(`${assetBucket}/images.json`);
            const imgUrls = data.images.map((image) => ({
                url: `${assetBucket}/images/${image.filename}`,
                name: image.name
            }));
            setImages(imgUrls);
        };
        fetchData();
    }, [assetBucket]); 

    return (
        <Slider {...settings}>
            {
                images && images.map((image, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <img src={image.url} alt={image.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                ))
            }
        </Slider>
    );
}

export default PictureDisplay;
