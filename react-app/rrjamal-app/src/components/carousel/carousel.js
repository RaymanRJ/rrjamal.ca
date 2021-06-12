import { React, useState } from 'react'
import { Container, Carousel, Image, Row, Col } from 'react-bootstrap'
import dongdaemun from '../../assets/images/dongdaemun-design-plaza-leds.jpg'
import olympic_park from '../../assets/images/seoul-olympic-park.jpg'
import shibuya from '../../assets/images/shibuya-crossing.jpg'
import shinjuku from '../../assets/images/shinjuku-goyen.jpg'
import tian_tan from '../../assets/images/tian-tan-buddha.jpg'
import tiger_temple from '../../assets/images/tiger-temple.jpg'
import tiger_temple_2 from '../../assets/images/tiger-temple-2.jpg'
import waujeongsa from '../../assets/images/waujeongsa-temple.jpg'
import './carousel.css';

const images = [
    {image: dongdaemun, title: "Dongdaemun Design Plaza"},
    {image: olympic_park, title: "Seoul Olympic Park"},
    {image: shibuya, title: "Shibuya Crossing"},
    {image: shinjuku, title: "Shinjuku Goyen Park"},
    {image: tian_tan, title: "Tian Tan Buddha"},
    {image: tiger_temple, title: "Tiger Temple"},
    {image: tiger_temple_2, title: "Tiger Temple"},
    {image: waujeongsa, title: "Waujeonsa Temple"}
]

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            images.map((image, i) => {
                                return (
                                    <Carousel.Item 
                                    key={i}>
                                        <Image
                                        src={image.image}
                                        fluid>
                                        </Image>
                                        <Carousel.Caption>
                                            <h3>{image.title}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>)
                            })
                        }
                    </Carousel></Col>
                <Col></Col>
            </Row>
        </Container>
    );
    }
  
export default ControlledCarousel