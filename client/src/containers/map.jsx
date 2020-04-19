import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/marker';
import {connect} from 'react-redux';

class Map extends Component {

    render(){
      if (this.props.position.comp === 'show') {
        return( 
          <div   className=" bg-gray-900 shadow mb-10 cardlist h-64 lg:bodyfull lg:m-0" >
              <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk" }}
        center={this.props.position.center}
        zoom={this.props.position.zoom}
      >
        
        <Marker
          lat={this.props.activeCard.lat}
          lng={this.props.activeCard.lng}
          card={this.props.activeCard}
          name={this.props.activeCard.name}
          color="red"
        />
          
          </GoogleMapReact>
          </div>
      );
        
      } else {
        return( 
          <div   className=" bg-gray-900 shadow mb-10 cardlist h-64 lg:bodyfull lg:m-0 " >
              <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk" }}
        center={this.props.position.center}
        zoom={this.props.position.zoom}
      >
        
        {this.props.cards.map((card,i) => <Marker
          key={i}
          lat={card.lat}
          lng={card.lng}
          card={card}
          name={card.name}
          color="red"
        />)}
          
          </GoogleMapReact>
          </div>
      );
      }
    }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    position: state.position,
    activeCard: state.activeCard
  }
}

export default connect(mapStateToProps)(Map);