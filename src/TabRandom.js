import React, { Component } from 'react';
import './App.css';

import {Segment, Divider, Input, Button, Container, Header } from 'semantic-ui-react'

import Autocomplete from './Autocomplete';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import Histogram from './Histogram';

import ChartTypeDropdown from './ChartTypeDropdown';
import ConstraintsDropdown from './ConstraintsDropdown';



class TabRandom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      drawReady: false,
      chartDict: {},
      sendToPyData: {
        chartType: [],
        location: "",
        constraints: [],
      },
      result: ""
    };
  }


  getDropdownValue = value => {
    console.log("App.js getDropdownValue: ", value); 
    this.setState({
      sendToPyData: {...this.state.sendToPyData, chartType: value}
    });
  }

  getConstraints = value => {
    console.log("App.js getConstriants: ", value); 
    this.setState({
      sendToPyData: {...this.state.sendToPyData, constraints: value}
    });
  }

  getLocationValue = value => {
    console.log("App.js getLocationValue: ", value); 
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
        console.log("response.chartDict: ",response.chartDict);
        this.setState({
          result: response.result,
          chartDict: response.chartDict,
          isLoading: false,
          drawReady: true,
        });
        
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

        <Autocomplete 
          getLocationValue={this.getLocationValue.bind(this)}
        />

        <Divider hidden />

        <ChartTypeDropdown 
          getDropdownValue={this.getDropdownValue.bind(this)}
          name="chartType"
          value={this.state.sendToPyData["chartType"]}
        />

        <Divider hidden />

        <ConstraintsDropdown 
          getConstraints={this.getConstraints.bind(this)}
          name="chartType"
          value={this.state.sendToPyData["constraints"]}
        />

        <Header as='h4'>{this.state.result}</Header>

        <Divider hidden />

        <Button onClick={!this.state.isLoading ? this.handlePredictClick : null}>
          Find interesting graphs
        </Button>

        <Divider hidden />

        <Divider hidden />

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("bar") &&
          this.state.chartDict["BarChart"].map((bar, idx) => (  
            <div key={idx}>
              <Segment basic>
                <BarChart 
                  title={bar["title"]}
                  data={bar["data"]}
                  haxisTitle={bar["haxisTitle"]}
                  vaxisTitle={bar["vaxisTitle"]}
                />
              </Segment>
            </div>
        ))}

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("line") &&
          this.state.chartDict["LineChart"].map((line, idx) => (  
            <div key={idx}>
              <Segment basic>
                <LineChart 
                  title={line["title"]}
                  data={line["data"]}
                  haxisTitle={line["haxisTitle"]}
                  vaxisTitle={line["vaxisTitle"]}
                />
              </Segment>
            </div>
        ))}

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("scatter") &&
          this.state.chartDict["ScatterChart"].map((scatter, idx) => (  
            <div key={idx}>
              <Segment basic>
                <ScatterChart 
                  title={scatter["title"]}
                  data={scatter["data"]}
                  haxisTitle={scatter["haxisTitle"]}
                  vaxisTitle={scatter["vaxisTitle"]}
                />
              </Segment>
            </div>
        ))}

        {this.state.drawReady && this.state.sendToPyData["chartType"].includes("histogram") &&
          this.state.chartDict["Histogram"].map((hist, idx) => (  
            <div key={idx}>
              <Segment basic>
                <Histogram 
                  title={hist["title"]}
                  data={hist["data"]}
                />
              </Segment>
            </div>
        ))}

      </Segment>
      </div>
    );
  }
}

export default TabRandom;

