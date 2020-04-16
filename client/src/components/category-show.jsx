import React, { Component } from 'react';

//import Component
import Header from '../containers/header';
import NavBar from '../containers/navbar';
import HomeBody from '../components/home-body';
import AssociationList from '../containers/association-list';

class Category extends Component {


    render(){
        return(
            <div>
                <Header />
                <NavBar />
            <div >
                <HomeBody component={<AssociationList assoc="category" id={this.props.match.params.id} />} />
            </div>
        </div>
        );
    }
}

export default Category;