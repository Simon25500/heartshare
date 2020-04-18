import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNear, setAssoc, setPosition } from '../actions';
import { Link, withRouter } from 'react-router-dom';


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
        this.props.setNear(this.position).then(()=> {
            this.props.setPosition({center:this.position,zoom:8})
            this.props.history.push(`/near/lat=${this.position.lat}&lng=${this.position.lng}`)
        })

    }

    onClickAssoc = () => {
        this.props.setAssoc().then(()=> {
            this.props.setPosition({ center: {lat: 46.22,lng: 2.21 },zoom: 5})
            this.props.history.push('/associations/index')
        })
    }

    onClickCat = () => {
        this.props.setPosition({ center: {lat: 46.22,lng: 2.21 },zoom: 5})
    }

    render(){
        return(
            <div className="flex justify-between mx-8 ">
                <div onClick={this.onClickNear} className="cursor-pointer shadow choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                    <p className="font-bold">Près de chez vous</p>
                </div>
                <Link  to="/category/index" onClick={this.onClickCat} className="cursor-pointer shadow choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                    <div >
                        <p className="font-bold">Category</p>
                    </div>
                </Link>
                <div to="/associations/index" onClick={this.onClickAssoc} className="cursor-pointer shadow choice py-2 w-1/4 bg-gray-300 rounded-md text-center">
                    <div  >
                        <p className="font-bold">Toutes les associations</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setNear: setNear,
            setAssoc: setAssoc,
            setPosition: setPosition
        },
        dispatch
    )
}



export default withRouter(connect(null, mapDispatchToProps)(NavBar));
