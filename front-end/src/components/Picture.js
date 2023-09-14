import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import { fetchImageJson } from  '../utils/s3API';



function PictureDisplay({assetBucket}) {
    const [images, setImages] = useState(null);
    const [imageJson, setImageJson] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const imageJson = await fetchImageJson(`${assetBucket}/images.json`);
            setImageJson(imageJson);
        };
    
        fetchData();
    }, [assetBucket]); 

    useEffect(() => {
        const buildImageURLs = () => {
            const images = []
            imageJson.images.map((image, index) => (images.push({url:`${assetBucket}/images/${image.filename}`, name: image.name})))
            setImages(images);
        };

        if (imageJson){
            buildImageURLs();
        }

    }, [assetBucket, imageJson]);

      

    return (
        <div>
            <Slider {...settings}>
                {
                    images && images.map((image, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                            <img src={image.url} alt={image.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default PictureDisplay;
