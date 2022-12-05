import {Container, Col, Row} from 'react-bootstrap'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Disable from '../components/DisableSearch';

const CarDetail = () => {
    return (
        <Container >
            <Col>
            <Row>
                <div className='header'>
                    <Header />
                    <Banner isButtonShow={false}/>
                </div>
                <div>
                <Disable />
                </div>
                <div>
                    <Filter/>
                </div>
                <div className='detail-footer'>
                <Footer/>
                </div>
            </Row>
            </Col>
        </Container>
    );
}

export default CarDetail;