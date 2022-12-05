import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import testi from "../image/testi-1.png"

const Testimonial = () => {
    return (
            <Container>
                    <Row>
                        <Col id="testimonial">
                            <div className="testimoni">
                                <h1 className="testimoni-1">Testimonial</h1>
                                <h4 className="testimoni-2">Berbagai review positif dari para pelanggan kami</h4>
                            </div>
                        </Col>
                    </Row>
                <div className="testimonial">
                    <Carousel>
                        <Carousel.Item>
                            <Image className="testi" src={testi} alt="img"></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="testi" src={testi} alt="img"></Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="testi" src={testi} alt="img"></Image>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
    )
}

export default Testimonial