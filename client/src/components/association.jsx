import React, { Component } from 'react';

import Header from '../containers/header';
import NavBar from '../containers/navbar';
import HomeBody from '../components/home-body';
import AssociationShow from '../containers/association-show';


class Association extends Component {

    render(){
        return(
            <div>
                <Header />
                <NavBar />
            <div >
                <HomeBody comp="show" component={<AssociationShow id={this.props.match.params.id}/>} />
            </div>
        </div>
        );

    }
}
export default Association;