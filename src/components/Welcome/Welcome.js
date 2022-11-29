import React from 'react';
import './Welcome.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Bottom1 from '../../Images/Bottom image/pic-a1.jpg'
import Bottom2 from '../../Images/Bottom image/pic-a2.jpg'
import Bottom3 from '../../Images/Bottom image/pic-a3.jpg'
import Bottom4 from '../../Images/Bottom image/pic-a4.jpg'



const Welcome = () => {
    return (
        <div>
            <h5 className='mx-auto welcome'>Welcome</h5>
            <hr />
            <h4 className='five-star mx-auto mb-5'>
                FIVE START HOTEL
            </h4>

            <Container>
                <Row xs={1} md={2} className="g-4 mb-5">
                    {
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Bottom1} />

                            </Card>
                        </Col>
                    }
                    {
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Bottom2} />

                            </Card>
                        </Col>
                    }
                    {
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Bottom3} />

                            </Card>
                        </Col>
                    }
                    {
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Bottom4} />

                            </Card>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;