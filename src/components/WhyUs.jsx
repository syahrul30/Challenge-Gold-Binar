import { Container, Row, Col, Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import icon1 from "../image/icon-1.png"
import icon2 from "../image/icon-2.png"
import icon3 from "../image/icon-3.png"
import icon4 from "../image/icon-4.png"

const WhyUs = () => {
    return (
        <div id="whyus">
            <div>
                <div className="why-text1">Why Us?</div>
                <div className="why-text2">Mengapa harus pilih Binar Car Rental?</div>
            </div>
            <Container className="why-us">
                <Row >
                        <Col md={3}>
                            <Card  style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Image className="icon-1" src={icon1} alt="icon1"></Image>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Mobil Lengkap</Card.Title>
                                    <Card.Text>
                                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Image className="icon-2" src={icon2} alt="icon2"></Image>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Harga Murah</Card.Title>
                                    <Card.Text>
                                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Image className="icon-3" src={icon3} alt="icon3"></Image>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Layanan 24 Jam</Card.Title>
                                    <Card.Text>
                                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Image className="icon-4" src={icon4} alt="icon4"></Image>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Sopir Profesional</Card.Title>
                                    <Card.Text>
                                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyUs