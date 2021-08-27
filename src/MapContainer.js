import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
   state = {
      stores: [
         { lat: 7.4342, lng: 3.9496 },
         { lat: 7.3415, lng: 3.8723 },
         { lat: 7.4356, lng: 3.9824 },
         { lat: 7.4342, lng: 3.9496 },
      ],
   };
   displayMarker = () => {
      return this.state.stores.map((store, index) => {
         return (
            <Marker
               key={index}
               id={index}
               position={{ lat: store.lat, lng: store.lng }}
               onClick={() => alert('you clicked')}
            />
         );
      });
   };
   render() {
      return (
         <div>
            <Map
               google={this.props.google}
               zoom={8}
               style={mapStyles}
               initialCenter={{ lat: 7.3775, lng: 3.947 }}
            >
               {this.displayMarker()}
               {/* <Marker position={{ lat: 7.3775, lng: 3.947 }} /> */}
            </Map>
         </div>
      );
   }
}

const mapStyles = {
   width: '100%',
   height: '100%',
};

export default GoogleApiWrapper({
   apiKey: 'AIzaSyA8o1t8eo88QfNrDoKBhAnaNHZaQvxtRBQ',
})(MapContainer);
