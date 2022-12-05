import { Container, Row, Col, Dropdown, Button} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const SearchCarMenu = () => {
    const [carData, setCardata] = useState([]);
    const [fName, setFname] = useState("");
    const [fCategory, setFcategory] = useState("");
    const [fPrice, setFprice] = useState("");
    const [fStatus, setFstatus] = useState("")

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
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fPrice}&status=${fStatus}`)
        .then((res) => {
        console.log(res);
        setCardata(res.data.cars);
        })
        .catch((err) => console.log(err.message));
    };
    
    const handleChangeCategory = (e) => {
        setFcategory(e.target.value);
    };

    const handlePrice = (e) => {
        setFprice(e.target.value);
    };

    const handleStatus = (e) => {
        setFstatus(e.target.value);
    };
    

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
                            <Dropdown >
                                <h5>Kategori</h5>
                                <Form.Select onChange={handleChangeCategory} className="select-form" aria-label="Default select example">
                                    <option value={""} disabled selected hidden>Masukan Kapasitas Mobil</option>
                                    <option value={"small"}>2-4 Orang</option>
                                    <option value={"medium"}>4-6 Orang</option>
                                    <option value={"large"}>6-8 Orang</option>
                                </Form.Select>
                            </Dropdown>
                        </div>
                        <div className="harga">
                            <Dropdown >
                                <h5>Harga</h5>
                                <Form.Select onChange={handlePrice} className="select-form" aria-label="Default select example">
                                    <option value={""} disabled selected hidden>Harga</option>
                                    <option value={"200000"}>Rp. 200.000 - Rp. 500.000</option>
                                    <option value={"400000"}>Rp. 500.000 - Rp. 700.000</option>
                                    <option value={"700000"}>Rp. 700.000 - Rp. 800.000</option>
                                </Form.Select>
                            </Dropdown>
                        </div>
                        <div className="status">
                            <Dropdown >
                                <h5>Status</h5>
                                <Form.Select onChange={handleStatus} className="select-form" aria-label="Default select example">
                                    <option value={""} disabled selected hidden>Status</option>
                                    <option value="false">Disewakan</option>
                                    <option value="true">Belum Disewakan</option>
                                </Form.Select>
                            </Dropdown>
                        </div>
                        <div>
                            <Button onClick={handleFilter} className="cari-mobil" style={{ backgroundColor: '#5CB85F' }}>Cari Mobil</Button>
                        </div>
                    </div>
                    <div className="card-wrapper">
                            {!!carData.length ? carData.map((item) => (
                                <div className="car-card">
                                    <div className="img-container">
                                        <img src={item.image} alt="car" />
                                    </div>
                                    <div className="car-text">
                                        <p className="car-title">{item.name}</p>
                                        <h2 className="car-price">{item.price} / hari</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                        <Link to={`/cardetail/${item.id}`}>
                                            <Button className="filter-button" style={{ backgroundColor: '#5CB85F' }}>Pilih Mobil</Button>
                                        </Link>
                                </div>
                                ))
                            : null}
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}  

export default SearchCarMenu;