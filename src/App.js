import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react'
import logo from './imgs/src-logo.svg';
import contactImage from './imgs/contact-photo.jpg';
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
                    <p>Shoe Repair Concierge</p>
                    <nav id="nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="elements.html">About</a></li>
                            <li><a href="elements.html">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                {/* BANNER */}
                <section id="banner">
                    <Image src={logo} verticalAlign="middle" alt="logo" className="logo"/>
                </section>

                {/* SERVICES*/}
                <section id="services" className="services-section">
                    <div className="description">
                        <p>CHINATOWN VANCOUVER LOCATED. BEST PRICES GUARANTEED. ARTISAN STYLE SHOE REPAIR.</p>
                    </div>
                    <div className="brochures">
                        <Grid stackable columns={2}>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Image src={brochureFront} className="brochure-front"/>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Image src={brochureBack} className="brochure-back"/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>


                </section>

                {/* ABOUT */}
                <section id="about" className="about-section">
                    <div className="about-description">
                    <p>Shoe Repair Concierge is an artisan style shoe repair shop located in Chinatown, Vancouver offering the best prices guaranteed.</p>
                    </div>
                    <p> Third generation Polish, bespoke shoemaker and cobbler Michal Marcinek, studied in
                        Florence, Italy at Accademia Riacci which is regarded as one of the worlds most
                        prestigious artisan shoemaking schools in the world. His experience in shoe repair, orthopedic footwear, boot factory manufacturing and handmade footwear gives him a unique approach
                        in the west coast footwear industry. All products are made, designed and sourced in
                        Vancouver, B.C. resulting in functional, aesthetic and quality crafted pieces.</p>
                </section>

                {/*<section vertical masive className="home-page">*/}

                {/*<div className="navbar-menu">*/}
                {/*<a className="navbar">Home</a>*/}
                {/*<a className="navbar">Services</a>*/}
                {/*<a className="navbar">About</a>*/}
                {/*<a className="navbar">Contact</a>*/}
                {/*</div>*/}

                {/*<Image src={background} verticalAlign="middle" />*/}
                {/*<Image src={logo} verticalAlign="middle" alt="logo" className="logo"/>*/}
                {/*<Header>Shoe Repair Concierge</Header>*/}
                {/*</section>*/}

                {/*<Segment id="home">*/}
                {/*<Header>Home</Header>*/}
                {/*</Segment>*/}
                {/*<Segment id="about">*/}
                {/*<Grid>*/}
                {/*<Grid.Column width={8}>*/}
                {/*/!*<Image src={aboutImage}/>*!/*/}
                {/*</Grid.Column>*/}
                {/*<Grid.Column width={8} className="text-column">*/}
                {/*<Header>About</Header>*/}
                {/*<p>*/}
                {/*Third generation Polish, bespoke shoemaker and cobbler Michal Marcinek, studied in*/}
                {/*Florence, Italy at Accademia Riacci which is regarded as one of the worlds most*/}
                {/*prestigious artisan shoemaking schools in the world. His experience in shoe repair, orthopedic*/}
                {/*footwear, boot factory manufacturing and handmade footwear gives him a unique approach*/}
                {/*in the west coast footwear industry. All products are made, designed and sourced in*/}
                {/*Vancouver, B.C. resulting in functional, aesthetic and quality crafted pieces.*/}
                {/*</p>*/}
                {/*</Grid.Column>*/}
                {/*</Grid>*/}
                {/*</Segment>*/}
                {/*<Segment id="services">*/}
                {/*<Header>Services</Header>*/}
                {/*</Segment>*/}
                {/*<Segment id="contact">*/}
                {/*<Grid>*/}
                {/*<Grid.Column width={8}>*/}
                {/*<Image src={contactImage}/>*/}
                {/*</Grid.Column>*/}
                {/*<Grid.Column width={8}>*/}
                {/*<Header>CONTACT</Header>*/}
                {/*<p>Chinatown Plaza</p>*/}
                {/*<p>180 Keefer Street</p>*/}
                {/*<p>Vancouver, BC</p>*/}
                {/*​*/}
                {/*<p>Email: marcinek@shoerepair.pl</p>*/}
                {/*</Grid.Column>*/}
                {/*</Grid>*/}
                {/*</Segment>*/}
            </div>
        );
    }
}

export default App;
