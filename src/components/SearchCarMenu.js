import { Container, Row, Col, Dropdown, Button} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const SearchCarMenu = () => {
    const [carData, setCardata] = useState([]);
    const [fName, setFname] = useState("");
    const [fCategory, setFcategory] = useState("");

    useEffect(() => {
        axios
        .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
        .then((res) => {
            console.log(res);
            setCardata(res.data.cars);
        })
        .catch((err) => console.log(err.message));
    }, []);

    const handleChangeName = (e) => {
        setFname(e.target.value);
    };
    
    const handleFilter = (e) => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}`)
        .then((res) => {
        console.log(res);
        setCardata(res.data.cars);
        })
        .catch((err) => console.log(err.message));
    };
    
    const handleChangeCategory = (e) => {
        setFcategory(e.target.value);
    }
    

    return (
        <div>
            <Container> 
                <Row>
                    <Col className="search-car" id="searchcar">
                    <div className="frame">
                        <div className="input">
                            <h5>Nama Mobil</h5>
                            <input onChange={handleChangeName} type="text" id="input" placeholder="Ketik nama/tipe mobil"/>
                        </div>
                        <div className="kategori">
                            <Dropdown>
                                <h5>Kategori</h5>
                                <Form.Control sx={{ m: 1, minWidth: 120 }}
                                    value={fCategory}
                                    onChange={handleChangeCategory}
                                    displayEmpty
                                    >
                                <Dropdown.Toggle id="dropdown-button-white-example1" variant="light">
                                Masukan Kapasitas Mobil
                                </Dropdown.Toggle>
                                    <Dropdown.Menu variant="white">
                                    <Dropdown.Item href="#/action-2">2 - 4 Orang</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">4 - 6 Orang</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">6 - 8 Orang</Dropdown.Item>
                                </Dropdown.Menu>
                                </Form.Control>
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
                        <div className="card-wrapper">
                            {!!carData.length ? carData.map((item) => (
                                <div className="car-card">
                                    <p>{item.name}</p>
                                    <h2>{item.price}/ hari</h2>
                                    <p>Lorem ipsum</p>
                                    <Link to={`/cardetail/${item.id}`}>
                                        <Button onClick={handleFilter} className="cari-mobil" style={{ backgroundColor: '#5CB85F' }}>Cari Mobil</Button>
                                    </Link>
                                </div>
                                ))
                            : null}
                        </div>   
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}  

export default SearchCarMenu;