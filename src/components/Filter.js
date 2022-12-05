import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Filter = () => {
    const {id} = useParams();
    const [carData, setCardata] = useState([])  
    
    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res) => {
            console.log(res)
            setCardata(res.data)
        })
        .catch((err) => console.log(err.message))
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <div className="container-filter">
                        <h2>Tentang Paket</h2>
                        <h2>Include</h2>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <h2>Exclude</h2>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <h2>Refund, Reschedule, Overtime</h2>
                        <ul>
                            <li>idak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>

                    <div className="card-filter">
                        {
                            Object.entries(carData).length ? (
                                <div className="car-card">
                                    <div className="img-container">
                                        <img src={carData.image} alt="car" />
                                    </div>
                                    <div className="car-text">
                                        <p className="car-title">{carData.name}</p>
                                        <h2 className="car-price">{carData.price} / hari</h2>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div> 
                </Col>
            </Row>
        </Container>
    );
}

export default Filter;