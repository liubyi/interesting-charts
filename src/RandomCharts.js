import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import './App.css';

import {Segment, Divider, Input, Button, Container, Header, Reveal, Label, Icon, Image } from 'semantic-ui-react'

import Autocomplete from './Autocomplete';
import GenericChart from './GenericChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import Histogram from './Histogram';

import ChartTypeDropdown from './ChartTypeDropdown';
import DropdownLocations from './DropdownLocations';



class TabRandom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      drawReady: false,
      chartDict: {},
      locationList: [],
      inputLocation: "",
      sendToPyData: {
        chartType: [],
        location: "",
      },
      result: ""
    };
  }


  formatOptions(locationList) {
    const chartOptions = [];

    for (var i = 0; i < locationList.length; i++) {
      var currPlace = locationList[i]
      chartOptions.push({
        key: currPlace,
        text: currPlace,
        value: currPlace
      })
    }

    return chartOptions;
  }


  componentDidMount() {
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(this.state.sendToPyData)
      })
      .then(response => response.json())
      .then(response => {
        console.log("componentDidMount called")
        console.log("componentDidMount response.result: ",response.result);
        console.log("componentDidMount response.locationList: ",response.backendInfo); // [locationList, chartDict]
        if (typeof(response.backendInfo) !== 'undefined' && typeof(response.backendInfo[0]) !== 'undefined') {
          this.setState({
            locationList: this.formatOptions(response.backendInfo[0]),
          });
        }
        
      }
    );
  }

  handleInputChange = e => {
    this.setState({
      sendToPyData: {...this.state.sendToPyData, location: e.target.value}
    });
  };


  getChartTypeDropdownValue = value => {
    console.log("App.js getChartTypeDropdownValue: ", value); 
    this.setState({
      sendToPyData: {...this.state.sendToPyData, chartType: value}
    });
  }


  getLocationDropdownValue = value => {
    console.log("App.js getLocationDropdownValue: ", value); 
    this.setState({
      sendToPyData: {...this.state.sendToPyData, location: value}
    });
  }

  handlePredictClick = (event) => {
    console.log("handlePredictClick");
    const sendToPyData = this.state.sendToPyData;
    console.log("sendToPyData: ", sendToPyData);
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
        console.log("response.result: ",response.result); 
        console.log("response.inputLocation: ",response.inputLocation); 
        console.log("response.chartDict: ",response.backendInfo[1]); // [locationList, chartDict]
        if (Object.keys(response.backendInfo[1]).length > 0) {
          this.setState({
            result: response.result,
            chartDict: response.backendInfo[1],
            isLoading: false,
            drawReady: true,
          });
        } 
      }
    );
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }


  render() {
    return (
      <div>

      <Segment basic>

        <Divider hidden />

        <DropdownLocations
          getLocationDropdownValue={this.getLocationDropdownValue.bind(this)}
          name="chartType"
          locationList={this.state.locationList}
          value={this.state.sendToPyData["chartType"]}
        />

        <Divider hidden />

        <ChartTypeDropdown 
          getChartTypeDropdownValue={this.getChartTypeDropdownValue.bind(this)}
          name="chartType"
          value={this.state.sendToPyData["chartType"]}
        />

        <Divider hidden />

        <Button onClick={this.handlePredictClick}>
          Find interesting graphs
        </Button>

        <Divider hidden />



        <Divider horizontal color='teal'><Header as='h2' color='blue'>Singleton</Header></Divider>

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("singleton") &&
          this.state.chartDict["Singleton"].map((chart, idx) => (  
            <div key={idx}>
              <Segment >

              <Label as='a' color='black' size='big' basic>
                {idx+1}
              </Label>

                <LineChart
                  title={chart["title"]}
                  data={chart["data"]}
                  chartType={chart["chartType"]} 
                  haxisTitle={chart["haxisTitle"]}
                  vaxisTitle={chart["vaxisTitle"]}
                />   
                <Segment padded>
                  <p>Description: {chart["description"]} </p>
                </Segment>
              </Segment>
              <Divider hidden />
            </div>
        ))}

        <Divider horizontal color='teal'><Header as='h2' color='blue'>State Comparison</Header></Divider>

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("stateComparison") &&
          this.state.chartDict["StateComparison"].map((chart, idx) => (  
            <div key={idx}>
              <Segment >

                <Label as='a' color='black' size='big' basic>
                  {idx+1}
                </Label>
                <LineChart
                  title={chart["title"]}
                  data={chart["data"]}
                  chartType={chart["chartType"]} 
                  haxisTitle={chart["haxisTitle"]}
                  vaxisTitle={chart["vaxisTitle"]}
                />
                <Segment padded>
                  <p>Description: {chart["description"]} </p>
                </Segment>
              </Segment>
              <Divider hidden />
            </div>
        ))}

        <Divider horizontal color='teal'><Header as='h2' color='blue'>Correlation</Header></Divider>

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("correlation") &&
          this.state.chartDict["Correlation"].map((chart, idx) => (  
            <div key={idx}>
              <Segment >
                <Label as='a' color='black' size='big' basic>
                  {idx+1}
                </Label>
                <LineChart
                  title={chart["title"]}
                  data={chart["data"]}
                  chartType={chart["chartType"]} 
                  haxisTitle={chart["haxisTitle"]}
                  vaxisTitle={chart["vaxisTitle"]}
                />
                <Segment padded>
                  <p>Description: {chart["description"]} </p>
                </Segment>
              </Segment>
              <Divider hidden />
            </div>
        ))}

        <Divider horizontal color='teal'><Header as='h2' color='blue'>Sibling</Header></Divider>

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("sibling") &&
          this.state.chartDict["Sibling"].map((chart, idx) => (  
            <div key={idx}>
              <Segment >
                <Label as='a' color='black' size='big' basic>
                  {idx+1}
                </Label>
                <LineChart
                  title={chart["title"]}
                  data={chart["data"]}
                  chartType={chart["chartType"]} 
                  haxisTitle={chart["haxisTitle"]}
                  vaxisTitle={chart["vaxisTitle"]}
                />
                <Segment padded>
                  <p>Description: {chart["description"]} </p>
                </Segment>
              </Segment>
              <Divider hidden />
            </div>
        ))}

        <Divider horizontal color='teal'><Header as='h2' color='blue'>Sibling-Year</Header></Divider>

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("sibling-Year") &&
          this.state.chartDict["Sibling-Year"].map((chart, idx) => (  
            <div key={idx}>
              <Segment >
                <Label as='a' color='black' size='big' basic>
                  {idx+1}
                </Label>
                <BarChart
                  title={chart["title"]}
                  data={chart["data"]}
                  chartType={chart["chartType"]} 
                  haxisTitle={chart["haxisTitle"]}
                  vaxisTitle={chart["vaxisTitle"]}
                />
                <Segment padded>
                  <p>Description: {chart["description"]} </p>
                </Segment>
              </Segment>
              <Divider hidden />
            </div>
        ))}

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("top50Overall") &&
          this.state.chartDict["Top50Overall"].map((chart, idx) => (  
            <div key={idx}>
              <Segment >
                <Label as='a' color='black' size='big' basic>
                  {idx+1}
                </Label>
                <GenericChart
                  title={chart["title"]}
                  data={chart["data"]}
                  chartType={chart["chartType"]} 
                  haxisTitle={chart["haxisTitle"]}
                  vaxisTitle={chart["vaxisTitle"]}
                />
                <Segment padded>
                  <p>Description: {chart["description"]} </p>
                </Segment>
              </Segment>
              <Divider hidden />
            </div>
        ))}


      </Segment>
      </div>
    );
  }
}

export default TabRandom;

        // <Header as='h5' color='teal'>{this.state.result}</Header>

        // <Divider hidden />

        // <Divider hidden />


        // <Button onClick={!this.state.isLoading ? this.handlePredictClick : null}>
        //   Find interesting graphs
        // </Button>

