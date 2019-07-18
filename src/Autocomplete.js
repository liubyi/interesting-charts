// Imports
import React, { Component } from 'react';

// Import Search Bar Components
import { Input } from 'semantic-ui-react'

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Search extends Component {
  // Define Constructor
  constructor() {
    super();

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
  handlePlaceSelect() {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
    console.log("city: ",this.state.city, " | query: ", this.state.query);
    this.props.getLocationValue(this.state.query);
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6yj-nPBubFHHyrstLG17zfvhHYwsnpm8&libraries=places"
          onLoad={this.handleScriptLoad}
        />

        <Input 
          id="autocomplete" 
          fluid
          placeholder="Enter location" 
          icon='map marker alternate' 
          iconPosition='left'
        />

      </div>
    );
  }
}

export default Search;