import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SewaMobil = () => {
    return (
        <div>
            <Card style={{ backgroundColor: '#0D28A6' }} className="sewa-mobil row my-5 g-2 justify-content-around align-item-center text-white text-center mt-5 p-5">
                    <Card.Body>
                        <Card.Title>Sewa Mobil di (Lokasimu) Sekarang</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                        <Button style={{ backgroundColor: '#5CB85F' }}>Mulai Sewa Mobil</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default SewaMobil;