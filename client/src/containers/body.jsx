import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNear } from '../actions'
import Map from './map';
import Event from './event'
import CardList from './card-list';
import CardShow from './card-show';

class Body extends Component {

    componentDidMount() { 
        if (!this.props.comp){
            this.props.setNear(this.props.position)
        }
    }


    render(){
        
        return(
            <div className="mt-5 md:mt-20 mx-2 md:mx-8 flex justify-between">
                <div className="hidden md:block">
                    <Event />
                    <div className="actu shadow mt-10 w-64 h-64">
                    </div>
                </div>
                <div className="body md:ml-10 grid grid-cols-1 gap-10 w-full lg:grid-cols-2">
                    {this.props.comp === 'show' ? <CardShow id={this.props.id} comp='show' /> : <CardList  />}
                    <Map />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {setNear: setNear},
        dispatch
        ) 
}

export default connect(null, mapDispatchToProps)(Body);