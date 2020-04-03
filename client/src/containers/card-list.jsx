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
            return (
                <div className="cardlist w-full bg-gray-400 flex-grow overflow-y-scroll h-64 lg:h-128" id="scroll">
                 <p>coucou</p>
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