import React, { Component } from 'react';

class Card extends Component {
    
    render(){
        const style = {backgroundImage: `url(${this.props.img})`}
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const start = `${new Date(this.props.start).toLocaleDateString('fr',options)}`;
        const starttimes = `${new Date(this.props.start).toLocaleTimeString('fr',{ hour: '2-digit', minute: '2-digit' })}`;
        const stop = `${new Date(this.props.stop).toLocaleTimeString('fr',{ hour: '2-digit', minute: '2-digit' })}`;
        return(
            <div className="flex border-solid border-b border-gray-600" >
                <div className="w-24 h-24 bg-gray-700 bg-cover bg-center" style={style}></div>
                <div className="p-2 flex justify-between w-full">
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-sm font-bold">{this.props.name}</p>
                        <p className="text-sm">{start} de {starttimes} à {stop} </p>
                    </div>
                    <div className="flex flex-col justify-between h-full items-end">
                        <p className="text-sm">{this.props.city}</p>
                        <p className="text-xs">{this.props.place}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;