import React, { Component } from 'react';
import './App.css';

import { Icon, Tab, Segment, Divider, Input, Button, Container, Header } from 'semantic-ui-react'

// import TabRandom from './TabRandom';
import RandomCharts from './RandomCharts';
import TabCorrelations from './TabCorrelations';
import TabCorrelationGraphs from './TabCorrelationGraphs';

import KML from './KML';

// removed KML and correlation

class App extends Component {

  
  render() {
    return (
      <div>
        <Divider hidden />
        <Header as='h1' textAlign='centered' color='blue'>
          D a t a &nbsp; C o m m o n s  &nbsp; G r a p h s &nbsp;&nbsp;
          <Icon name='line graph'/>
        </Header>
        <Tab panes={[

          { 
            menuItem: 'Interesting charts', 
            render: () => <Segment basic>
              <RandomCharts />
            </Segment> 
          },
          {
            menuItem: 'KML',
            render: () => <Segment basic>
              <KML />

            </Segment>
          },
          { menuItem: '', 
            render: () => <Segment basic>
              <TabCorrelations />
            </Segment> 
          },

        ]} />

      
      </div>
    );
  }
}

export default App;

// <KML isMarkerShown={true} />

          // { 
          //   menuItem: 'Correlation Graphs', 
          //   render: () => <Segment basic>
          //     <TabCorrelationGraphs />
          //   </Segment> 
          // },