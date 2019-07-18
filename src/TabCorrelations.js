import React, { Component } from 'react';
import { Grid, Image, Segment, Icon, Divider, Button } from 'semantic-ui-react'

import Autocomplete from './Autocomplete';
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
      <Button >
        Graph correlations
      </Button>
      <Divider hidden />
      <Grid stackable columns={3}>
        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>
      </Grid>
      <Grid stackable columns={3}>
        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>
      </Grid>
      <Grid stackable columns={3}>
        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Autocomplete 
              getLocationValue={this.getLocationValue.bind(this)}
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 1'
            />
            <Divider hidden />
            <DropdownCorrelations 
              placeholder='Variable 2'
            />
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default TabCorrelations

