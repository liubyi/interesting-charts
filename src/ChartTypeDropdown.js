import React, { Component } from 'react'
import { Grid, Segment, Dropdown } from 'semantic-ui-react'

// const chartOptions = [
//   { key: 'bar', text: 'Bar', value: 'bar' },
//   { key: 'line', text: 'Line', value: 'line' },
//   { key: 'scatter', text: 'Scatter', value: 'scatter' },
//   { key: 'histogram', text: 'Histogram', value: 'histogram' },
// ]


const chartOptions = [
  { key: 'singleton', text: 'Singleton', value: 'singleton' },
  { key: 'stateComparison', text: 'StateComparison', value: 'stateComparison' },
  { key: 'correlation', text: 'Correlation', value: 'correlation' },
  { key: 'sibling', text: 'Sibling', value: 'sibling' },
  { key: 'sibling-Year', text: 'Sibling-Year', value: 'sibling-Year' },
  { key: 'top50Overall', text: 'Top50Overall', value: 'top50Overall' },
]

export default class DropdownExampleControlled extends Component {
  state = { value: []}

  handleChange = (e, { value }) => {
    console.log("ChartTypeDropdown.js: ", value);
    this.setState({ value });
    this.props.getChartTypeDropdownValue(value);
  }

  render() {
    const { value } = this.state

    return (
          <Dropdown
            placeholder='Chart type'
            fluid
            multiple
            search
            selection
            options={chartOptions}
            onChange={this.handleChange.bind(this)}
            value={value}
          />

    )
  }
}

// <Grid.Column>
//           <Segment secondary>
//             <pre>Current value: {value}</pre>
//           </Segment>
//         </Grid.Column>
