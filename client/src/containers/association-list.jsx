import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setAssoc, setCat } from '../actions';
import AssociationCard from './association-card';

class AssociationList extends Component {


    componentDidMount(){
        if (!this.props.assoc){
            this.props.setAssoc()
        } else {
            this.props.setCat().then(() => {
                const cat = this.props.category.find(c => c._id === this.props.id )
                this.props.setAssoc(cat.associations)
                
            })
        }

    }

    render(){
        if(this.props.association.length !== 0){
            return(
                <div className="w-full body overflow-y-scroll lg:grid shadow lg:grid-cols-2 " id="scroll">
                    {this.props.association.map(assoc => <AssociationCard list="list" key={assoc._id} card={assoc} comp="show" /> )}
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
        
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            setAssoc: setAssoc,
            setCat: setCat
        },
        dispatch
    )
}



const mapStateToProps =( state )=> {
    return {
        association: state.association,
        category: state.category
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AssociationList);