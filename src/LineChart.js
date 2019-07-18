import React, {Component} from 'react'

import Chart from 'react-google-charts';

class LineChart extends Component {
	render(){
    	return(
    		<div>

    		<Chart
			  width={'100%'}
			  height={'580px'}
			  chartType="LineChart"
			  loader={<div>Loading Chart</div>}
			  data={this.props.data}
			  options={{
			  	title: this.props.title,
			  	chartArea: { width: '50%' },
			    hAxis: {
			      title: this.props.haxisTitle,
			    },
			    vAxis: {
			      title: this.props.vaxisTitle,
			    },
			  }}
			  rootProps={{ 'data-testid': '1' }}
			/>

			</div>
    	);
    }
}

export default LineChart