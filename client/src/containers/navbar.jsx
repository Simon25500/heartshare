import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNear,cardSet, setCat } from '../actions';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    
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

    onClickNear = () => {
        this.props.setNear(this.position);

    }

    render(){
        return(
            <div className="flex justify-between mx-8 ">
                <div onClick={this.onClickNear} className="cursor-pointer choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                    <p className="font-bold">Près de chez vous</p>
                </div>
                <Link  to="/category/index" className="cursor-pointer choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                    <div >
                        <p className="font-bold">Category</p>
                    </div>
                </Link>
                <Link to="/associations/index" className="cursor-pointer choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                    <div  >
                        <p className="font-bold">Toutes les associations</p>
                    </div>
                </Link>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setNear: setNear,
            cardSet: cardSet,
            setCat: setCat
        },
        dispatch
    )
}



export default connect(null, mapDispatchToProps)(NavBar);
