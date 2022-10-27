


//import "../store_directory.json";
//import {store_directory} from "react";
import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";

/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {

  render() {
    return (
      <div className="container" >
        <GoogleMaps
        apikey={"AIzaSyBosIY0zRX1ALR_iofIq5sciV7kClvcpIo"}
        style={{height: "400px", width: "300px"}}
        zoom={12}
        center={{
          lat: 19.42847,
          lng: -99.12766
        }}
        markers={[
          {Name: Red Barn Stores 3858-CUAJIMALPA, Address: JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210}
          {Name: Red Barn Stores 2344-LOMAS, Address: BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS C.P.11220},
          {Name: Red Barn Stores 1770-PATIO SANTA FE, Address: AV. PROLONGACIÓN PASEO DE LA REFORMA NO. 400, ENTRE LAS CALLES: AVENIDA VASCO DE QUIROGA  Y DE AVENIDA PASEO DE LA REFORMA, COL. SANTA FE,  DELEGACIÓN ÁLVARO OBREGÓN CP  01210}
        ]}
        />
        </div>
        );
  }
}
       <div style={divStyle}>

       
		  <h1> Put your solution here!</h1>
      </div>
    
      
    

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};