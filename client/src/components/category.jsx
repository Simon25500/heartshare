import React, { Component } from 'react';

//import Component
import Header from '../containers/header';
import NavBar from '../containers/navbar';
import HomeBody from '../components/home-body';
import CatList from '../containers/cat-list';

class Category extends Component {

    render(){
        return(
            <div>
                <Header />
                <NavBar />
            <div >
                <HomeBody component={<CatList/>} />
            </div>
        </div>
        );
    }
}

export default Category;