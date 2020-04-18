import React, { Component } from 'react';
var FA = require('react-fontawesome')

class Event extends Component {

    render(){
        return(
            <div className="block shadow bg-gray-400 w-64 h-64 text-center">
                <FA name="calendar" className='text-6xl mt-10 opacity-25'/>
                <p className="p-10 text-gray-700">Connectez vous pour voir vos evenement</p>
            </div>
        );
    }
}

export default Event;