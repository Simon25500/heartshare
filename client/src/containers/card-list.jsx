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
                <div className="cardlist w-full bg-gray-200 flex-grow overflow-y-scroll h-64" id="scroll">
                    {this.props.cards.map(card => <Card key={card._id}
                    name={card.name}
                    img={card.association.img_url}
                    date={card.date}
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
            const date = new Date(this.props.cards.date).toLocaleDateString('fr',options)
            const start = (this.props.cards.start === null ? "Non indiqué ":this.props.cards.start.slice(0,5))
            const stop = (this.props.cards.stop === null ? "Non indiqué ":this.props.cards.stop.slice(0,5))
            return (
                <div className="flex flex-col justify-between cardlist w-full bg-gray-400 flex-grow overflow-y-scroll h-64 lg:h-128 lg:p-10" id="scroll">
                    <h3 className="text-lg font-bold text-center ">Evenement</h3>
                    <div className="px-5 flex justify-between lg:mt-10">
                        <div>
                            <p className="text-md font-bold">{this.props.cards.name}</p>
                            <p className="text-sm">{date} de {start} à {stop} </p>
                        </div>
                        <div className="w-56">
                            <p>{this.props.cards.location}</p>
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