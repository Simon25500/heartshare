import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/marker';
import {connect} from 'react-redux';

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 46.22,
          lng: 2.21
        },
        zoom: 5
      };

      
 

    render(){
      if (Array.isArray(this.props.cards)) {
        return( 
            <div   className=" bg-gray-900 h-full" >
                <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk" }}
          defaultCenter={this.props.center}
          zoom={this.props.zoom}
        >
          
          {this.props.cards.map(card => <Marker
            key={card._id}
            lat={card.lat}
            lng={card.lng}
            card={card}
            name={card.name}
            color="red"
          />)}
            
            </GoogleMapReact>
            </div>
        );
      } else {

        return( 
          <div   className=" bg-gray-900 h-full" >
              <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk" }}
        center={{
          lat: this.props.cards.lat,
          lng: this.props.cards.lng
        }}
        zoom={15}
      >
        
        <Marker
          lat={this.props.cards.lat}
          lng={this.props.cards.lng}
          card={this.props.cards}
          name={this.props.cards.name}
          color="red"
        />
          
          </GoogleMapReact>
          </div>
      );
      }
    }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Map);