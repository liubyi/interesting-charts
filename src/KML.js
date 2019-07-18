import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polygon } from "react-google-maps"

import {Segment, Divider, Input, Button, Container, Header, List } from 'semantic-ui-react'

import ConstraintsDropdown from './ConstraintsDropdown';
import MapComponent from './MapComponent';
import SliderYear from './SliderYear';


class KML extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      drawReady: false,
      sendToPyData: {
        chartType: [],
        constraints: [],
        location: "",
      },
      geoArray: [],
      result: "empty"

    };
  }

  getConstraints = value => {
    console.log("App.js getConstraints: ", value); 
    this.setState({
      sendToPyData: {...this.state.sendToPyData, constraints: value}
    });
  }

  handleInputChange = e => {
    this.setState({
      sendToPyData: {...this.state.sendToPyData, location: e.target.value}
    });
  };



  handleDrawClick = (event) => {
    console.log("KML handleDrawClick");
    const sendToPyData = this.state.sendToPyData;
    console.log("KML sendToPyData: ", sendToPyData);
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(sendToPyData)
      })
      .then(response => response.json())
      .then(response => {
        console.log("KML response.result: ",response.result);
        console.log("KML response.geoArray: ",response.geoArray);
        this.setState({
          geoArray: response.geoArray,
          isLoading: false,
          drawReady: true,
        });
        
      }
    );
  }



  render() {
    return (
      <div>
        <Input 
          placeholder='Enter state'
          onChange={this.handleInputChange} 
        />

        <Divider hidden />

        <ConstraintsDropdown 
          getConstraints={this.getConstraints.bind(this)}
          name="chartType"
          value={this.state.sendToPyData["constraints"]}
        />

        <Divider hidden />

        <SliderYear />

        <Divider hidden />

        <MapComponent
          isMarkerShown={true}
          geoArray={this.state.geoArray}
        />


        <Divider hidden />

        <Button onClick={!this.state.isLoading ? this.handleDrawClick : null}>
          Draw Polygons
        </Button>

        <Divider hidden />

        <Header as='h4'>Count</Header>

        <List>
          <List.Item>
            <Header as='h5' color='violet'>
              [517., 544., 557., 587., 588., 667., 693., 694., 697.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='blue'>
              [ 741.,  742.,  888.,  937.,  945.,  982.,  998., 1024., 1045.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='teal'>
              [1145., 1160., 1162., 1171., 1182., 1217., 1245., 1252., 1319.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='green'>
              [1408., 1465., 1479., 1497., 1498., 1552., 1615., 1618.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='olive'>
              [1691., 1799., 1832., 1962., 2001., 2048., 2082., 2084.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='yellow'>
              [2263., 2298., 2342., 2343., 2651., 2676., 2744., 2878.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='orange'>
              [3364., 3374., 3515., 3621., 3631., 3756., 3807., 3903.]
            </Header>
          </List.Item>

          <List.Item>
            <Header as='h5' color='red'>
              [ 4680.,  4713.,  6669.,  7709.,  9147.,  9304., 15803., 26010.]
            </Header>
          </List.Item>
        </List>

      </div>
    );
  }
}

export default KML;



