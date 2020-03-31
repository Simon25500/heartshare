import React, { Component } from 'react';

class Card extends Component {
    
    render(){
        return(
            <div className="flex border-solid border-b border-gray-600 ">
                <div className="w-24 h-24 bg-gray-700"></div>
                <div>
                    <p className="text-xs">coucou</p>
                </div>
            </div>
        );
    }
}

export default Card;