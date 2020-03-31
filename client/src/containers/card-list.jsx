import React, { Component } from 'react';
import Card from './card'

class CardList extends Component {
    render() {
        return (
            <div className="w-full bg-gray-400 flex-grow overflow-y-scroll h-64 lg:h-full" id="scroll">
                <Card />
            </div>            
        );
    }
}

export default CardList;