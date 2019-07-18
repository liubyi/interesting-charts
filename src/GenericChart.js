import React, {Component} from 'react'

import Chart from 'react-google-charts';

class BarChart extends Component {
	render(){
    	return(
    		<div>

    		<Chart
			  width={'100%'}
			  height={'610px'}
			  chartType={this.props.chartType}
			  loader={<div>Loading Chart</div>}
			  data={this.props.data}
			  options={{
			    title: this.props.title,
			    chartArea: { width: '60%' },
			    hAxis: {
			      title: this.props.haxisTitle,
			      minValue: 0,
			    },
			    vAxis: {
			      title: this.props.vaxisTitle,
			    },
			  }}
			  // For tests
			  rootProps={{ 'data-testid': '1' }}
			/>
			</div>
    	);
    }
}

export default BarChart

// // For barchart
// 			    
