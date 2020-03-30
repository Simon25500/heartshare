import React, { Component } from 'react';

class NavChoice extends Component {

    render(){
        return(
            <div className="choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                <p className="font-bold">{this.props.name}</p>
            </div>
        );
    }

}

export default NavChoice;