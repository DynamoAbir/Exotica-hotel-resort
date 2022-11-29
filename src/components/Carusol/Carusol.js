import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carosel1 from '../../Images/Carusol image/slide-1.jpg'
import Carosel2 from '../../Images/Carusol image/slide-2.jpg'
import Carosel3 from '../../Images/Carusol image/slide-3.jpg'
const Carusol = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carosel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Premium Experiance</h5>
                        <p>We committed to offer inspiring travel experiences. Best of all, this is all about having an immersive experience with the incredible wildlife and South East Asian magnificent biodiversity</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carosel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Enjoy Your Stay</h5>
                        <p>Enjoy All the services and amenities offered at our hotel, on that day, according to your desired duration: room, work space, restaurant.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carosel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Booking Now</h5>
                        <p>
                            Exotica is a five star hotel managed by professional management. We always strive to provide the best service for your convenience. Our hotel is equipped with facilities like swimming pool, spa, fitness center and more.
                            Come and experience an unforgettable holiday experience
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carusol;