import React, {Component} from 'react'

import Chart from 'react-google-charts';

class Histogram extends Component {
	render(){
    	return(
    		<div>

    			<Chart
				  width={'500px'}
				  height={'300px'}
				  chartType="Histogram"
				  loader={<div>Loading Chart</div>}
				  data={this.props.data}
				  options={{
				    title: this.props.title,
				    legend: { position: 'none' },
				  }}
				  rootProps={{ 'data-testid': '1' }}
				/>

			</div>
    	);
    }
}

export default Histogram