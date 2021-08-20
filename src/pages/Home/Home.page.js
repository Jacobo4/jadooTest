//Core
import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {Fireworks} from 'fireworks-js/dist/react'
//Css
import './Home.scss';
//Images
import heroBg from "./../../assets/images/home/hero/hero-bg.png";
import bookThumbnail from "./../../assets/images/home/bookTrip/bookDestination.jpg";
import bookThumbnail2 from "./../../assets/images/home/bookTrip/place-thumbnail.jpg";
import partnerLogo1 from "./../../assets/images/global/partners/partnerLogo-1.png";
import partnerLogo2 from "./../../assets/images/global/partners/partnerLogo-2.png";
import partnerLogo3 from "./../../assets/images/global/partners/partnerLogo-3.png";
import partnerLogo4 from "./../../assets/images/global/partners/partnerLogo-4.png";
import partnerLogo5 from "./../../assets/images/global/partners/partnerLogo-5.png";
//Decors
import heroBgDecorLeft from "./../../assets/images/global/decors/lateral-shadow.png";
import heroBgDecorRight from "./../../assets/images/global/decors/lateral-bg.svg";
import cardDecor from "./../../assets/images/global/decors/rectangle.svg";
import stars from "./../../assets/images/global/decors/stars.svg";
import springRight from "./../../assets/images/global/decors/spring-2.png";
import springLeft from "./../../assets/images/global/decors/spring-3.png";
//Components
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import BookCard from "../../components/BookCard/BookCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";


function HomePage() {
    const [services, setServices] = useState([]);
    const [destinations, setDestinations] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [fireworksDisplay, setFireworksDisplay] = useState(false)

    const fireworksOptions = {
        speed: 3,
        mouse: {
            max: 4,
            move: false,
            click: true
        }
    }
    // const [testimonials, setTestimonials] = useState([]);


    useEffect(() => {
        const getData = async () => {
            //En práctica serían diferentes endpoints, pero por ser la prueba, hice un único endpoint
            const data = await fetch('data/json/api.json').then(res => res.json());
            setServices(data.services);
            setDestinations(data.destinations);
            setTestimonials(data.testimonials);
        }
        getData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFireworksDisplay(!fireworksDisplay)
    };

    let partnersSliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        //is Desktop first :(
        responsive: [
            {
                breakpoint: 768,
                settings: {slidesToShow: 1}
            },
            {
                breakpoint: 992,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint: 1024,
                settings: {slidesToShow: 4}
            }
        ]
    };

    let testimonialSliderSettings = {
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        //is Desktop first :(
        responsive: [
            {
                breakpoint: 992,
                settings: {dots: false}
            }
        ]
    };


    return (
        <main className={"Home"}>
            <img className={"Home-heroDecors Home-heroDecors--left"} src={heroBgDecorLeft} alt=""/>
            <img className={"Home-heroDecors Home-heroDecors--right"} src={heroBgDecorRight} alt=""/>

            {/*//------------------Hero - starts -----------------*/}
            <section id={"hero"} className={"hero"}>
                <div className="hero__info">
                    <h3 className={"hero__subtitle"}>BEST DESTINATIONS AROUND THE WORLD</h3>
                    <h1 className={"hero__title"}>Travel, <span>enjoy</span> and live a new and full life</h1>
                    <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                        listening. Park gate sell they west hard for the.</p>
                    <div className="hero__actions">
                        <button className="hero__action btn btn--secondary">Find out more</button>
                        <button className="hero__action">
                            <span className={"btn btn--primary icon-play"}/>
                            Play demo
                        </button>
                    </div>
                </div>

                <div className="hero__banner">
                    <img src={heroBg} alt=""/>
                </div>
            </section>
            {/*//------------------Hero - ends -----------------*/}

            {/*//------------------Services - starts -----------------*/}
            <section id={"services"} className={"services"}>
                <img src={stars} alt="" className="services__decor"/>
                <h4 className={"services__title"}>Services</h4>
                <h2 className={"services__subtitle"}>We Offer Best Services</h2>
                <div className="services__cards">
                    {
                        (services.length > 0) ?
                            services.map((service, i) => {
                                    //Conditional just to add a decor to the second card._.
                                    return (i === 1) ? (
                                        <div className={"services__card"}>
                                            <ServiceCard key={service.id} image={service.thumbnail} title={service.title}
                                                         description={service.description}/>
                                            <img className={"services__card-decor"} src={cardDecor} alt=""/>
                                        </div>

                                    ) : (
                                        <div className={"ServiceCard__card"}>
                                            <ServiceCard key={service.id} image={service.thumbnail} title={service.title}
                                                         description={service.description}/>
                                        </div>
                                    )
                                }
                            )
                            : (<div>Loading...</div>)
                    }
                </div>
            </section>
            {/*//------------------Services - ends -----------------*/}

            {/*//------------------Destinations - starts -----------------*/}
            <section id={"destinations"} className={"destinations"}>
                <h4 className={"destinations__title"}>Top selling</h4>
                <h2 className={"destinations__subtitle"}>Top Destinations</h2>
                <div className="destinations__cards">
                    {
                        (destinations.length > 0) ?
                            destinations.map((destination, i) => (
                                    <div className={"destinations__card"}>
                                        <DestinationCard key={destination.id} image={destination.thumbnail}
                                                         location={destination.location}
                                                         price={destination.price} duration={destination.duration}/>
                                    </div>
                                )
                            )
                            : (<div>Loading...</div>)
                    }

                </div>
            </section>
            {/*//------------------Destinations - ends -----------------*/}

            {/*//------------------Booking - starts -----------------*/}
            <section id={"bookings"} className={"booking"}>
                <div className={"booking__info"}>
                    <h4 className={"booking__title"}>Easy and Fast</h4>
                    <h2 className={"booking__subtitle"}>Book your next trip in 3 easy steps</h2>
                    <ul className="booking-steps">
                        {/*//------step 1 -----------------*/}
                        <li className="booking-step">
                            <i className="icon-box booking-step__icon"/>
                            <h6 className="booking-step__title">Choose Destination</h6>
                            <p className="booking-step__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </li>
                        {/*//------step 2 -----------------*/}
                        <li className="booking-step">
                            <i className="icon-water-sport booking-step__icon"/>
                            <h6 className="booking-step__title">Make Payment</h6>
                            <p className="booking-step__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </li>
                        {/*//------step 3 -----------------*/}
                        <li className="booking-step">
                            <i className="icon-taxi booking-step__icon"/>
                            <h6 className="booking-step__title">Reach Airport on Selected Date</h6>
                            <p className="booking-step__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={"booking__preview"}>
                    <BookCard
                        title={"Trip To Greece"}
                        description={"14-29 June| by Robbin joseph"}
                        population={"24 people going"}
                        image={bookThumbnail}
                        stateBox={"Ongoing"}
                        stateBoxTitle={"Trip to rome"}
                        stateBoxPercentage={"40%"}
                        stateBoxThumbnail={bookThumbnail2}
                    />
                </div>
            </section>
            {/*//------------------Booking - ends -----------------*/}

            {/*//------------------Testimonials - starts -----------------*/}
            <section id={"testimonials"} className={"testimonials"}>
                <div className="testimonials__info">
                    <h4 className={"testimonials__subtitle"}>Testimonials</h4>
                    <h2 className={"testimonials__title"}>What people say about Us.</h2>
                </div>
                <div className="testimonials__slider">
                    {
                        (testimonials.length > 0) ? (
                            <Slider {...testimonialSliderSettings}>
                                {testimonials.map((testimonial, i) => (
                                        <div>
                                            <div className={"testimonials__slide"}>
                                                <TestimonialCard key={testimonial.id} thumbnail={testimonial.thumbnail}
                                                                 message={testimonial.message}
                                                                 name={testimonial.name} position={testimonial.position}/>
                                            </div>
                                        </div>
                                    )
                                )}
                            </Slider>
                        ) : <div>loading...</div>
                    }

                </div>
            </section>
            {/*//------------------Testimonials - ends -----------------*/}

            {/*//------------------partners - starts -----------------*/}
            <section id={"partners"} className={"partners"}>
                <div className="partners__slider">
                    <Slider {...partnersSliderSettings}>
                        <div>
                            <div className="partners__slide">
                                <img src={partnerLogo1} alt="Axon logo"/>
                            </div>
                        </div>
                        <div>
                            <div className="partners__slide">
                                <img src={partnerLogo2} alt="JetStar logo"/>
                            </div>
                        </div>
                        <div>
                            <div className="partners__slide">
                                <img src={partnerLogo3} alt="Expedia logo"/>
                            </div>
                        </div>
                        <div>
                            <div className="partners__slide">
                                <img src={partnerLogo4} alt="QANTAS"/>
                            </div>
                        </div>
                        <div>
                            <div className="partners__slide">
                                <img src={partnerLogo5} alt="Alltalia"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            {/*//------------------partners - ends -----------------*/}

            {/*//------------------NewsLetter - starts -----------------*/}
            <section id={"newsLetter"} className={"newsLetter"}>
                <i className="icon-send newsLetter__decor newsLetter__decor--top"/>
                <img src={springLeft} alt="" className="newsLetter__decor newsLetter__decor--left"/>
                <img src={springRight} alt="" className="newsLetter__decor newsLetter__decor--right"/>
                {fireworksDisplay && <Fireworks options={fireworksOptions} style={{
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    zIndex: -1,
                }}/>}
                <h2 className="newsLetter__title">Subscribe to get information, latest news and other
                    interesting offers about Cobham</h2>
                <form onSubmit={e => handleSubmit(e)} className="newsLetter-form">
                    <div className="newsLetter-form__wrapper">
                        <i className="icon-mail newsLetter-form__icon"/>
                        <input placeholder={"Your email"} type="email" className="newsLetter-form__input"/>
                    </div>
                    <button type={"submit"} className="newsLetter-form__submitBtn">Subscribe
                    </button>
                </form>
            </section>
            {/*//------------------NewsLetter - ends -----------------*/}


        </main>
    );
}

export default HomePage;
