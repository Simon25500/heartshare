import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AssociationCard extends Component {
    
    render(){
        if (this.props.list === 'list'){
            const style = {backgroundImage: `url(${this.props.card.img_url})`}
            return(
                <Link to={`/associations/${this.props.card._id}`} className="shadow cursor-pointer flex border-solid border-b border-gray-600">
                    <div className="w-24 md:w-64 h-24 bg-white bg-no-repeat bg-contain bg-center" style={style}></div>
                    <div className="p-2 flex justify-between w-full">
                        <div className="flex flex-col justify-between h-full">
                            <p className="text-sm font-bold">{this.props.card.name}</p>
                        </div>
                    </div>
                </Link>
            );
        } else {
            const style = {backgroundImage: `url(${this.props.card.img_url})`}            
            return(
                    <div className="flex shadow border-solid bg-gray-300 h-full">
                        <div className="w-24 md:w-64 h-64 bg-white bg-no-repeat bg-contain bg-center lg:h-full" style={style}></div>
                        <div className="p-2 w-full">
                                <h2 className="text-lg font-bold text-center">{this.props.card.name}</h2>
                                <p className="mt-5">{this.props.card.category ? this.props.card.category.name : ""}</p>
                                <p className="overflow-y-scroll h-24 mt-5 md:overflow-auto md:h-full lg:mt-20">{this.props.card.description}</p>
                        </div>
                    </div>
            );
        }
    }

}

export default AssociationCard;