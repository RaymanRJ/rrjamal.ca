import { React, useState } from 'react'
import { Container, Carousel, Image, Row, Col } from 'react-bootstrap'
import images from './images'
import './carousel.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <div>
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
                                                <a href={image.url} target={"_blank"}>
                                                    <h3>{image.title}</h3>
                                                </a>
                                            </Carousel.Caption>
                                        </Carousel.Item>)
                                })
                            }
                        </Carousel>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
    }
  
export default ControlledCarousel