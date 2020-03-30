import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 46.22,
          lng: 2.21
        },
        zoom: 5
      };
 

    render(){
        return( 
            <div   className=" bg-gray-900 h-full" >
                <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            
            </GoogleMapReact>
            </div>
        );
    }
}

export default Map;