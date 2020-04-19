import React, { Component } from 'react';

import Header from '../containers/header';
import NavBar from '../containers/navbar';
import Body from '../containers/body';


class CardShow extends Component {

    render() {

        return(
            <div>
                <Header />
                <NavBar />
            <div >
                <Body comp="show"  id={this.props.match.params.id}/>
            </div>
        </div>
        );
    }


}


export default CardShow;