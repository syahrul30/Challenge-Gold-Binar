import './App.css';
import './style/LandingPage.css'
import {Container, Col, Row} from 'react-bootstrap'
import Header from './components/Header';
import Banner from './components/Banner';
import OurServices from './components/OurServices';
import WhyUs from './components/WhyUs';
import Testimonial from './components/Testimonial';
import SewaMobil from './components/SewaMobil';
import Faq from './components/Faq';
import Footer from './components/Footer';
import SearchCar from './components/SearchCar';


function App() {
  return (
    <>
    <Container >
      <Col>
      <Row>
      <div className='header'>
        <Header />
        <Banner />
      </div>
      <div>
        <OurServices />
        <WhyUs/>
        <Testimonial/>
        <SewaMobil/>
        <Faq/>
        <Footer/>
        <SearchCar/>
      </div>
      </Row>
      </Col>
    </Container>
    </>
  );
}

export default App;
