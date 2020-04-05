import React, { Component } from 'react';
import NavChoice from '../containers/nav-choice';

class NavBar extends Component {

    render(){
        return(
            <div className="flex justify-between mx-8 ">
                <NavChoice name="Près de chez vous"/>
                <NavChoice name="Category"/>
                <NavChoice name="Tout les évenement"/>
            </div>
        );
    }

}

export default NavBar;