
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cardActive } from '../actions'
import '../assets/stylesheets/marker.css';

class Marker extends Component {

    onClick = () => {
        this.props.cardActive(this.props.card)
    }

    render(){
        return (
        <div>
            <div
            onClick={this.onClick}
            className="pin bounce"
            style={{ backgroundColor: this.props.color, cursor: 'pointer' }}
            title={this.props.name}
            />
            <div className="" />
        </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
return bindActionCreators(
    {cardActive: cardActive},
    dispatch
)
}
 

export default connect(null,mapDispatchToProps)(Marker);