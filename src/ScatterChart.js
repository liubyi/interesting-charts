import React, {Component} from 'react'

import Chart from 'react-google-charts';

class ScatterChart extends Component {
	render(){
    	return(
    		<div>

    		<Chart
			  width={'600px'}
			  height={'400px'}
			  chartType="ScatterChart"
			  loader={<div>Loading Chart</div>}
			  data={this.props.data}
			  options={{
			    title: this.props.title,
			    hAxis: { title: this.props.haxisTitle, minValue: 0, maxValue: 15 },
			    vAxis: { title: this.props.vaxisTitle, minValue: 0, maxValue: 15 },
			    legend: 'none',
			  }}
			  rootProps={{ 'data-testid': '1' }}
			/>

			</div>
    	);
    }
}

export default ScatterChart


