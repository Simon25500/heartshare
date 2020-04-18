import React, { Component } from 'react';
import Card from './card'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cardSet } from '../actions'

class CardList extends Component {
 

    render() {
        return (
            <div className="cardlist shadow body w-full bg-gray-200 flex-grow overflow-y-scroll h-64 " id="scroll">
                {this.props.cards.map((card,i) => <Card key={i} card={card} assoc={this.props.association.img_url} comp='show' />)}
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
        cards: state.cards,
        association: state.association
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CardList);