import { React, useState } from 'react'
import { Container, Carousel, Image, Row, Col } from 'react-bootstrap'
import images from './images'
import './carousel.css';

function GetCarousel(){
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    images.map((image, i) => {
                        return (
                            <Carousel.Item 
                            key={i}>
                                <Image
                                src={image.image}
                                fluid
                                rounded>
                                </Image>
                                <Carousel.Caption>
                                    <a href={image.url} target={"_blank"}>
                                        <h4>{image.title}</h4>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>)
                    })
                }
            </Carousel>
        </div>
    )
}

function ControlledCarousel() {
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    { GetCarousel() }
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
    }
  
export default ControlledCarousel