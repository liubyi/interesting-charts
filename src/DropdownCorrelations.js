import React, { Component } from 'react'
import { Grid, Segment, Dropdown } from 'semantic-ui-react'

const variables = [
  { key: 'Medium Income', text: 'Medium Income', value: 'Medium Income' },
  { key: 'Employment', text: 'Employment', value: 'Employment' },
  { key: 'Gender', text: 'Gender', value: 'Gender' },
  { key: 'Place Of Birth', text: 'Place of birth', value: 'Place of Birth' },
  { key: 'Race', text: 'Race', value: 'Race' },
]

export default class DropdownExampleControlled extends Component {
  state = { value: []}

  handleChange = (e, { value }) => {
    // console.log("DropdownCorrelations.js: ", value);
    // this.setState({ value });
    // this.props.getConstraints(value);
  }

  render() {
    const { value } = this.state

    return (
          <Dropdown
            // onChange={this.handleChange.bind(this)}

            placeholder={this.props.placeholder}
            fluid
            search
            selection
            options={variables}
          />

    )
  }
}
