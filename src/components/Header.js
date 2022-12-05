import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
    return (
        <div>
        {['md'].map((expand) => (
            <Navbar key={expand}  expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Brand className="brand" href="/">BCR</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="sidebar"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    BCR
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#ourservices">Our Services</Nav.Link>
                    <Nav.Link href="#whyus">Why Us</Nav.Link>
                    <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </div>
    );
    }

export default Header;