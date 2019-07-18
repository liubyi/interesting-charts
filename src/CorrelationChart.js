import React, {Component} from 'react'
import Chart from 'react-google-charts'


class CorrelationChart extends Component {
  render(){
    return(
      <Chart
        // width={'500px'}
        height={'300px'}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Diameter', 'Age'],
          [8, 37],
          [4, 19.5],
          [11, 52],
          [4, 22],
          [3, 16.5],
          [6.5, 32.8],
          [14, 72],
        ]}

        options={{
          title: 'Age of sugar maples vs. trunk diameter, in inches',
          titleTextStyle: {
            color: 'black',    
            // fontName: 'Times New Roman', 
            fontSize: 16, // 12, 18 (don't specify px)
            bold: false,    
            italic: false   
          },
          hAxis: { title: 'Diameter' },
          vAxis: { title: 'Age' },
          chartArea: { width: '40%', height: '80%'},
          tooltip: { isHtml: true, trigger: "visible", color: 'black' },
          // legend: 'none',
          legend: {
            textStyle: {color: 'black', fontSize: 12},
            maxLines: 5
          },
          trendlines: { 
            0: {
              tooltip: false,
              type: 'linear',
              showR2: true,
              visibleInLegend: true
            }
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
}
export default CorrelationChart

        // options={{

        //   chartArea: { width: '60%', height: '80%'},
        //   tooltip: { isHtml: true, trigger: "visible" },
        //   // legend: 'none',
        //   legend: {
        //     textStyle: {color: 'black', fontSize: 12},
        //     maxLines: 5
        //   },
        //   trendlines: this.props.display_trend && { 
        //     0: {
        //       tooltip: false,
        //       type: 'linear',
        //       showR2: true,
        //       visibleInLegend: true
        //     }
        //   },
        // }}
