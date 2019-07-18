import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polygon } from "react-google-maps"

import {Segment, Divider, Input, Button, Container, Header } from 'semantic-ui-react'

// All coords is an array of dicts
// Each dict contains the coordinates as well as the color


// Autcomplete url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6yj-nPBubFHHyrstLG17zfvhHYwsnpm8&libraries=places"
const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6yj-nPBubFHHyrstLG17zfvhHYwsnpm8",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <div>
    <GoogleMap defaultZoom={6} defaultCenter={{ lat: 33.4914, lng: -86.9824 }}>
        {props.isMarkerShown && <Marker position={{ lat: 33.4914, lng: -86.9824 }} />}

        {(props.geoArray.length > 0) && props.geoArray.map((geoDict, idx) => (  
            <div key={idx}>
              <Polygon
	            path={
	            	geoDict["coords"].map( ll => {
	    				return { lat: parseFloat(ll.lng), lng: parseFloat(ll.lat) }
					})
	            }
	            //key={1}
	            options={{
	                fillColor: geoDict["color"],
	                fillOpacity: 0.3,
	                strokeColor: "#000",
	                strokeOpacity: 1,
	                strokeWeight: 1
	            }} />
            </div>
        ))}

    </GoogleMap>

    </div>
)

export default MapComponent;


// {props.geoArray.map((geoDict, idx) => (  
//             <div key={idx}>
//               <Polygon
// 	            path={
// 	            	geoDict["coords"].map( ll => {
// 	    				return { lat: parseFloat(ll.lng), lng: parseFloat(ll.lat) }
// 					})
// 	            }
// 	            //key={1}
// 	            options={{
// 	                fillColor: geoDict["color"],
// 	                fillOpacity: 0.3,
// 	                strokeColor: "#000",
// 	                strokeOpacity: 1,
// 	                strokeWeight: 1
// 	            }} />
//             </div>
//         ))}


