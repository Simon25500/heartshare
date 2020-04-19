import React, { Component } from 'react';
import { cardActive, setPosition } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class CardShow extends Component {

    componentDidMount = () => {
        this.props.cardActive(this.props.id).then(() => {
            this.props.setPosition({ center: {lat: this.props.activeCard.lat,lng: this.props.activeCard.lng },zoom: 15, comp:'show'})
        })
    }



    render(){
        if (this.props.activeCard.association){
            const style = {backgroundImage: `url(${this.props.activeCard.association.img_url})`}
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = this.props.activeCard.date === null ? 'Non Indiqué' : new Date(this.props.activeCard.date).toLocaleDateString('fr',options)
            let start = ''
            let stop = ''
            if (this.props.activeCard.start) {
                start = (this.props.activeCard.start === null ? "Non indiqué ":this.props.activeCard.start.slice(0,5))
                stop = (this.props.activeCard.stop === null ? "Non indiqué ":this.props.activeCard.stop.slice(0,5))
            }
                return(
                        <div className=" flex shadow border-solid bg-gray-300 h-full max-h-full">
                            <div className="w-64 h-64 bg-white bg-no-repeat bg-contain bg-center lg:h-full" style={style}></div>
                            <div className="p-2 w-full">
                                    <h2 className="text-md font-bold text-center">{this.props.activeCard.name}</h2>
                                    <p className="mt-5">{this.props.activeCard.category ? this.props.activeCard.category.name : ""}</p>
                                    <p className="mt-5 lg:mt-20" >Date: {this.props.activeCard.start ? `${date} de ${start} jusqu'a ${stop}`: date}</p>
                                    <p className="mt-5 lg:mt-20">description:</p>
                                    <p className=" h-20 overflow-y-scroll lg:h-64" id="scroll">{this.props.activeCard.description ? this.props.activeCard.description : this.props.activeCard.association.description}</p>
                                    <Link to={`/associations/${this.props.activeCard.association._id}`} className=" hover:font-bold">{this.props.activeCard.association.name}</Link>
                            </div>
                        </div>
                );
        } else {
            return <div></div>
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            cardActive: cardActive,
            setPosition: setPosition
        },
        dispatch
    )
}

const mapStateToProps = state => {
    return {
        activeCard: state.activeCard
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CardShow);