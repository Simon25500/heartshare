import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AssociationCard extends Component {
    
    render(){
        const style = {backgroundImage: `url(${this.props.img})`}
        return(
            <Link to={`/associations/${this.props.id}`} className="cursor-pointer flex border-solid border-b border-gray-600">
                <div className="w-64 h-24 bg-white bg-no-repeat bg-contain bg-center" style={style}></div>
                <div className="p-2 flex justify-between w-full">
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-sm font-bold">{this.props.name}</p>
                        <p className="text-sm font-bold">{}</p>
                    </div>
                </div>
            </Link>
        );
    }

}

export default AssociationCard;