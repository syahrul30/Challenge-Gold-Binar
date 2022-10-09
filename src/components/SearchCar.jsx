import { Container, Row, Col, Dropdown,  Button} from "react-bootstrap";

const SearchCar = () => {
    return (
        <div>
            <Container> 
                <Row>
                    <Col className="search-car" id="searchcar">
                    <div className="frame">
                        <div className="input">
                            <h5>Nama Mobil</h5>
                            <input type="text" id="input" placeholder="Ketik nama/tipe mobil"/>
                        </div>
                        <div className="kategori">
                            <Dropdown>
                                <h5>Kategori</h5>
                                <Dropdown.Toggle id="dropdown-button-white-example1" variant="light">
                                Masukan Kapasitas Mobil
                                </Dropdown.Toggle>
                                    <Dropdown.Menu variant="white">
                                    <Dropdown.Item href="#/action-2">2 - 4 Orang</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">4 - 6 Orang</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">6 - 8 Orang</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="harga">
                            <Dropdown>
                                <h5>Harga</h5>
                                <Dropdown.Toggle id="dropdown-button-white-example1" variant="light">
                                Masukan Harga Sewa per Hari
                                </Dropdown.Toggle>
                                    <Dropdown.Menu variant="white">
                                    <Dropdown.Item href="#/action-2">Rp. 400.000</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Rp. 400.000 - Rp. 600.000</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Rp. 800.000</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="status">
                            <Dropdown>
                                <h5>status</h5>
                                <Dropdown.Toggle id="dropdown-button-white-example1" variant="light">
                                Disewa
                                </Dropdown.Toggle>
                                    <Dropdown.Menu variant="white">
                                    <Dropdown.Item href="#/action-2">Disewakan</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Belum Disewa</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <Button className="cari-mobil" style={{ backgroundColor: '#5CB85F' }}>Cari Mobil</Button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SearchCar;