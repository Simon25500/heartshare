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
        return (
            <div className="w-full bg-gray-400 flex-grow overflow-y-scroll h-64 lg:h-full" id="scroll">
                {this.props.cards.map(card => <Card key={card._id}
                name={card.name}
                img={card.association.img_url}
                start={card.start}
                stop={card.stop}
                city={card.locationCity}
                place={card.location} />)}
            </div>            
        );
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