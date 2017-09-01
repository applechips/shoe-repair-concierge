import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react'
class homePage extends Component {
    render() {
        return (
            <Container id="home">
                <Segment>
                <div className="home-page-content">
                    <Header>Home</Header>
                </div>
                </Segment>
            </Container>
        )
    }
}

export default homePage;