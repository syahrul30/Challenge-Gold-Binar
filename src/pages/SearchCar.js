import {Container, Col, Row} from 'react-bootstrap'
import Header from '../components/Header';
import Banner from '../components/Banner';
import SearchCarMenu from '../components/SearchCarMenu';
import Footer from '../components/Footer';

const SearchCar = () => {
        return (
        <Container >
            <Col>
            <Row>
                <div className='header'>
                    <Header />
                    <Banner isButtonShow={false}/>
                </div>
                <div>
                <SearchCarMenu />
                </div>
                <div className='search-footer'>
                <Footer/>
                </div>
            </Row>
            </Col>
        </Container>
    );
}

export default SearchCar;