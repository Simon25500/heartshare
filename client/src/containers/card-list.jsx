import React, { Component } from 'react';
import Card from './card'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cardSet } from '../actions'

class CardList extends Component {

    componentDidMount() {
        this.props.cardSet()
    } 

    render() {

        if(Array.isArray(this.props.cards)) {

            return (
                <div className="cardlist w-full bg-gray-400 flex-grow overflow-y-scroll h-64" id="scroll">
                    {this.props.cards.map(card => <Card key={card._id}
                    name={card.name}
                    img={card.association.img_url}
                    start={card.start}
                    stop={card.stop}
                    city={card.locationCity}
                    place={card.location}
                    card={card} />)}
                </div>            
            );
        } else {
            const style = {backgroundImage: `url(${this.props.cards.association.img_url})`}
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const start = `${new Date(this.props.cards.start).toLocaleDateString('fr',options)}`;
            const starttimes = `${new Date(this.props.cards.start).toLocaleTimeString('fr',{ hour: '2-digit', minute: '2-digit' })}`;
            const stop = `${new Date(this.props.cards.stop).toLocaleTimeString('fr',{ hour: '2-digit', minute: '2-digit' })}`;
            return (
                <div className="flex flex-col justify-between cardlist w-full bg-gray-400 flex-grow overflow-y-scroll h-64 lg:h-128 lg:p-10" id="scroll">
                    <h3 className="text-lg font-bold text-center ">Evenement</h3>
                    <div className="px-5 flex justify-between lg:mt-10">
                        <div>
                            <p className="text-md font-bold">{this.props.cards.name}</p>
                            <p className="text-sm">{start} de {starttimes} à {stop} </p>
                        </div>
                        <div>
                            <p>{this.props.cards.location}</p>
                            <p>{this.props.cards.locationCity}</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-grow lg:flex-col lg:items-center lg:justify-around ">
                        <div className="w-32 h-32 bg-gray-700 bg-cover bg-center lg:mt-5" style={style} ></div>
                        <div className="w-full text-center ">
                            <h3 className="text-sm font-bold lg:text-lg">{this.props.cards.association.name}</h3>
                            <p className="text-sm lg:text-md lg:mt-10" >{this.props.cards.association.description}</p>
                        </div>
                    </div>
                </div>            
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {cardSet: cardSet},
        dispatch
    )
}

const mapStateToProps = (state) => {
    return{
        cards: state.cards
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CardList);