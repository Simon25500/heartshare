import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNear,cardSet } from '../actions'

class NavChoice extends Component {

    componentDidMount(){
        this.geoFindMe();
    }


    position = {}

    geoFindMe = () => {      

        const success = (position) => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            const coo = {lat: latitude, lng: longitude}
            this.position =  coo
        }
        
        const error = () => {
            return null
        }
        
        navigator.geolocation.getCurrentPosition(success, error)
        
    }

    onClick = () => {
        if (this.props.name === "Près de chez vous"){
            this.props.setNear(this.position);
        } else if (this.props.name === "Tout les évenement"){
            this.props.cardSet();
        }
    }



    render(){
        return(
            <div onClick={this.onClick} className="cursor-pointer choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                <p className="font-bold">{this.props.name}</p>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setNear: setNear,
            cardSet: cardSet
        },
        dispatch
    )
}



export default connect(null, mapDispatchToProps)(NavChoice);