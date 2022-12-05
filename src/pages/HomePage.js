import {Container, Col, Row} from 'react-bootstrap'
import Header from '../components/Header';
import Banner from '../components/Banner';
import OurServices from '../components/OurServices';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import SewaMobil from '../components/SewaMobil';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <Container >
            <Col>
            <Row>
                <div className='header'>
                    <Header />
                    <Banner isButtonShow={true} />
                </div>
                <div>
                    <OurServices />
                    <WhyUs/>
                    <Testimonial/>
                    <SewaMobil isButtonShow={true}/>
                    <Faq/>
                    <Footer/>
                </div>
            </Row>
            </Col>
        </Container>
    );
}

export default HomePage;