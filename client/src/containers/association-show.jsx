import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assocShow, cardSet } from '../actions'

//import component 
import Cardlist from './card-list';
import AssociationCard from './association-card';
import Map from './map';

class AssociationShow extends Component{

    componentDidMount = () => {
        this.props.assocShow(this.props.id).then( () => {
            if(this.props.activAssoc.events.length === 0) {
                this.props.cardSet(this.props.activAssoc.missions)
            } else {
                this.props.cardSet(this.props.activAssoc.events)                
            }
        })
        
    }

    render(){
        return(
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
                <AssociationCard card={this.props.activAssoc}/>
                <Cardlist comp='show' />
                <Map />
              </div>  
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            assocShow: assocShow,
            cardSet: cardSet
        },
        dispatch
    );
}

const mapStateToProps = (state) => {
    return {
        activAssoc: state.activeAssoc
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(AssociationShow);