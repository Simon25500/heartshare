import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cardActive } from '../actions'
import { Link } from 'react-router-dom'

class Card extends Component {
    
    render(){
        if (this.props.cat === "Don du Sang") {
            const style = {backgroundImage: `url(${this.props.card.association.img_url})`}
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(this.props.card.date).toLocaleDateString('fr',options)
            const start = (this.props.card.start === null ? "Non indiqué ":this.props.card.start.slice(0,5))
            const stop = (this.props.card.stop === null ? "Non indiqué ":this.props.card.stop.slice(0,5))
            return(
                <Link to={`/card/${this.props.assoc}`}>
                    <div  className="cursor-pointer flex border-solid border-b border-gray-600" >
                        <div className="w-24 h-24 bg-gray-700 bg-cover bg-center" style={style}></div>
                        <div className="p-2 flex justify-between w-full">
                            <div className="flex flex-col justify-between h-full">
                                <p className="text-sm font-bold">{this.props.card.name}</p>
                                <p className="text-sm">{date} de {start} à {stop} </p>
                            </div>
                            <div className="flex flex-col justify-between h-full w-40 items-end">
                                <p className="text-xs">{this.props.card.place}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        } else {
            const style = {backgroundImage: `url(${this.props.card.association.img_url})`}
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = this.props.card.date === null ? 'Date non Indiqué' : new Date(this.props.card.date).toLocaleDateString('fr',options)
            return(
                <Link to={`/card/${this.props.card._id}`}>
                    <div  className="cursor-pointer flex border-solid border-b border-gray-600" >
                        {this.props.comp === 'show' ? '' : <div className="hidden md:block w-24 h-24 bg-white bg-cover bg-center" style={style}></div>}
                        <div className="p-2 flex justify-between w-full">
                            <div className="flex flex-col justify-between h-full">
                                <p className="text-sm font-bold">{this.props.card.name}</p>
                                <p className="text-sm">{date}</p>
                            </div>
                            <div className="flex flex-col justify-between h-full w-40 items-end">
                                <p className="text-xs">{this.props.card.location}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {cardActive: cardActive},
        dispatch
    )
}

     
    
export default connect(null,mapDispatchToProps)(Card);
