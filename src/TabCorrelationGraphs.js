import React, { Component } from 'react';
import { Grid, Image, Segment, Icon, Divider, Button } from 'semantic-ui-react'

import Autocomplete from './Autocomplete';
import CorrelationChart from './CorrelationChart';
import DropdownCorrelations from './DropdownCorrelations';



class TabCorrelations extends Component {
  // getConstraints = value => {
  //   console.log("TabCorrelations.js getConstraints: ", value); 
  // }

  getLocationValue = value => {
    // console.log("App.js getLocationValue: ", value); 
    // this.setState({
    //   sendToPyData: {...this.state.sendToPyData, location: value}
    // });
  }

  render() {
    return (
      <div>

      <Divider hidden />
      <Grid stackable columns={3}>
        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>
      </Grid>
      <Grid stackable columns={3}>
        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>
      </Grid>
      <Grid stackable columns={3}>
        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <CorrelationChart />
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default TabCorrelations

