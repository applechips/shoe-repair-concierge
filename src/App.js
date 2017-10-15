import React, { Component } from 'react';
import { Image, Grid, Icon } from 'semantic-ui-react'
import logo from './imgs/src-logo.svg';
import contactImage from './imgs/michal-light.jpg';
import background from './imgs/background-edit.png';
import brochureFront from './imgs/brochure-front.jpg';
import brochureBack from './imgs/brochure-back.jpg';
// import aboutImage from './imgs/about-photo.jpg';


import './App.css';
import HomePage from './components/pages/home';

class App extends Component {
    render() {
        return (
            <div className="src-content">

                {/* HEADER */}
                <header id="header" className="alt">
                    {/*<p>Shoe Repair Concierge</p>*/}
                    {/*<Image src={logo} alt="logo" className="logo"/>*/}
                    <nav id="nav">
                        <ul>
                            <li><a href="headerindex">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <a href="#menu" class="navPanelToggle"><span class="fa fa-bars"></span></a>

                {/* BANNER */}
                <section id="banner">
                    <Image src={logo} alt="logo" className="logo"/>
                </section>

                {/* ABOUT */}
                <section id="about" className="src-about-section">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={2}>

                            </Grid.Column>
                            <Grid.Column width={12}>
                                <div className="about-description" id="about-desc">
                                    <p className="about-src">Shoe Repair Concierge is an artisan style shoe repair shop
                                        located in Chinatown, Vancouver offering the best prices guaranteed.</p>
                                    <hr />

                                    <p className="about-michal"> Third generation Polish, bespoke shoemaker and cobbler
                                        Michal Marcinek, studied in
                                        Florence, Italy at Accademia Riacci which is regarded as one of the worlds most
                                        prestigious artisan shoemaking schools in the world. His experience in shoe
                                        repair,
                                        orthopedic footwear, boot factory manufacturing and handmade footwear gives him
                                        a unique
                                        approach in the west coast footwear industry. All products are made, designed
                                        and sourced in
                                        Vancouver, B.C. resulting in functional, aesthetic and quality crafted
                                        pieces.</p>
                                    <p>Offering handmade shoes in the Summer of 2018.</p>
                                </div>
                                <Image src={contactImage} className="about-image"/>

                            </Grid.Column>
                            <Grid.Column width={2}>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>

                {/* SERVICES*/}
                <section id="services" className="services-section">
                    <div className="description">
                        <p>SERVICES</p>
                    </div>
                    <div className="brochures">
                        <Grid stackable columns={2}>
                            <Grid.Row>
                                <Grid.Column width={8} className="brochure-front-column">
                                    <Image src={brochureFront} className="brochure-front"/>
                                </Grid.Column>
                                <Grid.Column width={8} className="brochure-back-column">
                                    <Image src={brochureBack} className="brochure-back"/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>


                </section>

                {/* SERVICES CONTINUED */}
                <section id="showcase" className="showcase-section">
                    PHOTOS HERES TO HOVER TO SHOWCASE HIS SERVICES
                    <br />
                    <br />
                    <br />
                </section>

                {/* CONTACT */}
                <section id="contact" className="about-section">
                    <Grid stackable columns={2}>
                        <div className="social-icons">
                            <Icon name='facebook f' size="big" />
                            <Icon name='instagram' size="big" />
                            <Icon name='mail outline' size="big" />
                        </div>
                        <br />
                        <div className="contact-info">
                            <p>180 Keefer Street, Vancouver, B.C.</p>
                            <p>778 789 5115</p>
                            <p>marcinek@shoerepair.pl</p>
                        </div>
                    </Grid>


                </section>
            </div>
        );
    }
}

export default App;
