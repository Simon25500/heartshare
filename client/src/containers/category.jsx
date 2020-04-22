import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setCat, setAssoc} from '../actions'
import { Link } from 'react-router-dom';

class Category extends Component {

    onClick = () => {
        this.props.setCat([this.props.cat])
        this.props.setAssoc(this.props.cat.associations)
    }


    render(){
        
        return(
                <Link onClick={this.onClick} to={`/category/${this.props.cat._id}`} className="bg-gray-300 shadow-sm text-center flex items-center justify-center h-20 rounded">
                    <p className="text-lg font-bold">{this.props.name}</p>
                </Link>
            
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setCat: setCat,
            setAssoc: setAssoc
        },
        dispatch
    )
}



export default connect(null, mapDispatchToProps)(Category);