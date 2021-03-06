import React, { Component } from 'react';

//import Component
import Header from '../containers/header';
import NavBar from '../containers/navbar';
import HomeBody from '../components/home-body';
import Welcome from '../components/welcome';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <div >
                    <HomeBody component={<Welcome/>} />
                </div>
            </div>
        );
    }
}

export default HomePage;