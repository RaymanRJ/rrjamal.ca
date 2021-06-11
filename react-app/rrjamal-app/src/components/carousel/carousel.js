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

const images = [
    dongdaemun, olympic_park, shibuya,
    shinjuku, tian_tan, tiger_temple, tiger_temple_2,
    waujeongsa
]

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            images.map((image, i) => {
                                return (
                                    <Carousel.Item key={i}>
                                        <Image
                                        width="900px"
                                        className="m-auto"
                                        src={image}
                                        fluid>
                                        </Image>
                                    </Carousel.Item>)
                            })
                        }
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
    }
  
export default ControlledCarousel