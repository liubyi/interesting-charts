import React, { Component } from 'react'
import { Grid, Segment, Dropdown } from 'semantic-ui-react'

// const chartOptions = [
//   { key: 'bar', text: 'Bar', value: 'bar' },
//   { key: 'line', text: 'Line', value: 'line' },
//   { key: 'scatter', text: 'Scatter', value: 'scatter' },
//   { key: 'histogram', text: 'Histogram', value: 'histogram' },
// ]

// const chartOptions = [
//   { key: 'santaclara', text: 'Santa Clara', value: 'santaclara' },
//   { key: 'sanjose', text: 'SanJose', value: 'sanjose' },
// ]



export default class Location extends Component {
  state = { value: 'Select location'}

  handleChange = (e, { value }) => {
    console.log("DropdownLocations.js: ", value);
    this.setState({ value });
    this.props.getLocationDropdownValue(value);
  }

  render() {
    const { value } = this.state

    return (
          <Dropdown
            placeholder='Select location'
            fluid
            search
            selection
            options={this.props.locationList}
            onChange={this.handleChange.bind(this)}
          />

    )
  }
}

// <Grid.Column>
//           <Segment secondary>
//             <pre>Current value: {value}</pre>
//           </Segment>
//         </Grid.Column>
