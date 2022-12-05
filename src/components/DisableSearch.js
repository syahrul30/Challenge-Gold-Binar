import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Disable = () => {
    return (
        <div>
            <Container> 
                <Row>
                    <Col className="search-disable" id="searchcar">
                    <div className="frame">
                        <div className="input">
                            <h5>Nama Mobil</h5>
                            <input className="input-disable" type="text" id="input" disabled/>
                        </div>
                        <div className="kategori">
                            <Dropdown>
                                <h5>Kategori</h5>
                                <Form.Select disabled className="select-disable" aria-label="Default select example">
                                </Form.Select>
                            </Dropdown>
                        </div>
                        <div className="harga">
                            <Dropdown>
                                <h5>Harga</h5>
                                <Form.Select disabled className="select-disable" aria-label="Default select example">
                                </Form.Select>
                            </Dropdown>
                        </div>
                        <div className="status">
                            <Dropdown>
                                <h5>Status</h5>
                                <Form.Select disabled className="select-disable" aria-label="Default select example">
                                </Form.Select>
                            </Dropdown>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}  

export default Disable;