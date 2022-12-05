import { Container, Row, Col, Image } from "react-bootstrap"
import imgservice from "../image/img-service.png"

const OurServices = () => {
    return (
        <div>
            <Container > 
                <Row>
                    <Col id="ourservices">
                        <div className="container-services">
                            <p className="text-3">Best Car Rental for any kind of trip in (Lokasimu)!</p>
                            <p className="text-4">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <ul className="text-5">
                                <li >Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li >Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li >Sewa Mobil Jangka Panjang Bulanan</li>
                                <li >Gratis Antar - Jemput Mobil di Bandara</li>
                                <li >Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                        <div>
                            <Image className="img-service" src={imgservice} alt="img"></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices