import { Container, Image, Nav, Navbar} from "react-bootstrap";
import imglist from "../image/list-item.png"
import brand from "../image/brand.png"

const Footer = () => {
    return (
            <Container className="footer">
                <div className="footer-1">
                    <h6>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
                    <h6>binarcarrental@gmail.com</h6>
                    <h6>081-233-334-808</h6>
                </div>
                <div className="footer-2">
                    <Nav.Link href="#ourservices">Our Services</Nav.Link>
                    <Nav.Link href="#whyus">Why Us</Nav.Link>
                    <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </div>
                <div className="footer-3">
                    <h6>Connect With Us</h6>
                    <Image className="img-list" src={imglist} alt="list"></Image>
                </div>
                <div className="footer-4">
                    <h6>Copyright Binar 2022</h6>
                    <Navbar.Brand className="brand" href="#banner">
                    <Image className="brand" src={brand} alt="brand"></Image>
                    </Navbar.Brand>
                </div>
            </Container>
    )
}

export default Footer;