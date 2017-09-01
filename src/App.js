import React, { Component } from 'react';
import { Header, Container, Segment, Image, Grid } from 'semantic-ui-react'
import logo from './imgs/shoe-repair-concierge-logo-edited.png';
import contactImage from './imgs/contact-photo.jpg';


import './App.css';
import HomePage from './components/pages/home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Segment vertical masive className="App-header">
                    <Image src={logo} verticalAlign="middle" size="small" alt="logo"/>
                    <Header>Shoe Repair Concierge</Header>
                </Segment>
                <Segment id="home">
                    <Header>Home</Header>
                </Segment>
                <Segment id="about">
                    <Header>About</Header>
                    <p>
                        Third generation Polish, bespoke shoemaker and cobbler Michal Marcinek, studied in Florence,
                        Italy at Accademia Riacci which is regarded as one of the worlds most prestigious artisan
                        shoemaking schools in the world. His experience in shoe repair, orthopedic footwear, boot
                        factory manufacturing and handmade footwear gives him a unique approach in the west coast
                        footwear industry. All products are made, designed and sourced in Vancouver, B.C. resulting in
                        functional, aesthetic and quality crafted pieces.
                    </p>
                </Segment>
                <Segment id="services">
                    <Header>Services</Header>
                </Segment>
                <Segment id="contact">
                    <Header>Contact</Header>
                    <Grid>
                        <Grid.Column width={8}>
                            <Image src={contactImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header>CONTACT</Header>
                            <p>
                                Chinatown Plaza
                                180 Keefer Street
                                Vancouver, BC
                                ​
                                Email: marcinek@shoerepair.pl
                            </p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<HomePage />*/}
            </div>
        );
    }
}

export default App;
