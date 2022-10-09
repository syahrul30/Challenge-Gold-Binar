import { Container, Row, Col, Button, Image} from "react-bootstrap";
import bmwimage from "../image/bmw.png";

const Banner = () => {
    return (
        <div>
            <Container> 
                <Row>
                    <Col id="banner">
                        <div className="text-1">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
                        <div className="text-2">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
                        <div className="hero-button">
                            <Button style={{ backgroundColor: '#5CB85F' }}>Mulai Sewa Mobil</Button>
                        </div>
                        <div>
                            <Image className="car-image" src={bmwimage} alt="car"></Image>
                        </div>
                        <div className="bmw-bg"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;