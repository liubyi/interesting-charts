import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";
import "semantic-ui-css/semantic.min.css";
import { Label, Grid, Input, Segment, Divider } from "semantic-ui-react";

const SliderYear = props => {

const [value, setValue] = useState(2010);
const settings = {
    start: 2015,
    min: 2010,
    max: 2017,
    step: 1,
    onChange: value => {
        setValue(value);
    }
};

    

 
  return (
    <div>
      <Segment>
        <Slider discrete value color="teal" settings={settings} />
        <Divider hidden />
        <Label basic color="teal">
            Year: {value}
        </Label>
      </Segment>
    </div>
  );
};
 
export default SliderYear;