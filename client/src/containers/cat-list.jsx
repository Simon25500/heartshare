import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setCat} from '../actions'
import Category from './category'

class CatList extends Component {

    componentDidMount = () => {
        this.props.setCat();
    }


    render(){
        
        return(
            <div className="h-full w-full body p-5 grid grid-cols-2 gap-2 overflow-y-scroll" id="scroll">
                {this.props.category.map(cat => <Category key={cat._id} name={cat.name} cat={cat} />)}
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setCat: setCat},
        dispatch
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.category
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CatList);