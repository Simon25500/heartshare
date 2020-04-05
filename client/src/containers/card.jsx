import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cardActive } from '../actions'

class Card extends Component {
    
    onClick = () => {
        this.props.cardActive(this.props.card)
    }
    


    render(){
        const style = {backgroundImage: `url(${this.props.img})`}
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(this.props.date).toLocaleDateString('fr',options)
        const start = (this.props.start === null ? "Non indiqué ":this.props.start.slice(0,5))
        const stop = (this.props.stop === null ? "Non indiqué ":this.props.stop.slice(0,5))
        return(
            <div onClick={this.onClick}  className="cursor-pointer flex border-solid border-b border-gray-600" >
                <div className="w-24 h-24 bg-gray-700 bg-cover bg-center" style={style}></div>
                <div className="p-2 flex justify-between w-full">
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-sm font-bold">{this.props.name}</p>
                        <p className="text-sm">{date} de {start} à {stop} </p>
                    </div>
                    <div className="flex flex-col justify-between h-full w-40 items-end">
                        <p className="text-xs">{this.props.place}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {cardActive: cardActive},
        dispatch
    )
}
     
    
export default connect(null,mapDispatchToProps)(Card);
