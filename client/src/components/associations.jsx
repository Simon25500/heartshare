import React, { Component } from 'react';

//import Component
import Header from '../containers/header';
import NavBar from '../containers/navbar';
import HomeBody from '../components/home-body';
import AssociationList from '../containers/association-list';

class Associations extends Component {
    render(){
        return(
            <div>
                <Header />
                <NavBar />
            <div >
                <HomeBody component={<AssociationList/>} />
            </div>
        </div>
        );
    }
}

export default Associations;