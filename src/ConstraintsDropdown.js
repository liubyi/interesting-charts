import React, { Component } from 'react'
import { Grid, Segment, Dropdown } from 'semantic-ui-react'

const chartOptions = [
  { key: 'USDollar100000To124999', text: 'USDollar100000To124999', value: 'USDollar100000To124999' },
  { key: 'USDollar10000To14999', text: 'USDollar10000To14999', value: 'USDollar10000To14999' },
  { key: 'USDollar125000To149999', text: 'USDollar125000To149999', value: 'USDollar125000To149999' },
  { key: 'USDollar150000To199999', text: 'USDollar150000To199999', value: 'USDollar150000To199999' },
  { key: 'USDollar15000To19999', text: 'USDollar15000To19999', value: 'USDollar15000To19999' },
  { key: 'USDollar200000Onwards', text: 'USDollar200000Onwards', value: 'USDollar200000Onwards' },
  { key: 'USDollar20000To24999', text: 'USDollar20000To24999', value: 'USDollar20000To24999' },
  { key: 'USDollar25000To29999', text: 'USDollar25000To29999', value: 'USDollar25000To29999' },
  { key: 'USDollar30000To34999', text: 'USDollar30000To34999', value: 'USDollar30000To34999' },
  { key: 'USDollar35000To39999', text: 'USDollar35000To39999', value: 'USDollar35000To39999' },
  { key: 'USDollar40000To44999', text: 'USDollar40000To44999', value: 'USDollar40000To44999' },
  { key: 'USDollar50000To59999', text: 'USDollar50000To59999', value: 'USDollar50000To59999' },
  { key: 'USDollar60000To74999', text: 'USDollar60000To74999', value: 'USDollar60000To74999' },
  { key: '75000To99999', text: '75000To99999', value: '75000To99999' },
  { key: 'USDollarUpto10000', text: 'USDollarUpto10000', value: 'USDollarUpto10000' },
  { key: 'Race', text: 'Race', value: 'Race' },
]

export default class DropdownExampleControlled extends Component {
  state = { value: []}

  handleChange = (e, { value }) => {
    console.log("ConstraintsDropdown.js: ", value);
    this.setState({ value });
    this.props.getConstraints(value);
  }

  render() {
    const { value } = this.state

    return (
          <Dropdown
            placeholder='Select Constraints'
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
