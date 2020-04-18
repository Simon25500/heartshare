import React, { Component } from 'react';

//import Component
import Header from '../containers/header';
import NavBar from '../containers/navbar';
import Body from '../containers/body';

class Near extends Component {
    render(){
        
        return(
            <div>
                <Header />
                <NavBar />
            <div >
                <Body position={this.props.match.params} />
            </div>
        </div>
        );
    }
}

export default Near;