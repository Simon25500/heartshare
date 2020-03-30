import React, { Component } from 'react';

//import Component
import Header from '../containers/header';
import NavBar from '../components/navbar';
import Body from '../components/body';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <div >
                    <Body />
                </div>
            </div>
        );
    }
}

export default HomePage;