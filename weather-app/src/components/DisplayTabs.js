import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Weather from './Weather';

class DisplayTabs extends React.Component {

	state = {
		todaysData: undefined,
		tomorrowsData: undefined
	}

	
	componentDidMount(){
		var date = new Date().getDate();
		var tdate = date + 1;
		var data = Array.from(this.props.responseData.list)
		var todays = data.filter((x) => x.dt_txt.split(' ')[0].split('-')[2] == date);
		var tomorrows = data.filter(x => x.dt_txt.split(' ')[0].split('-')[2] == tdate);
		this.setState({
			todaysData: todays,
			tomorrowsData: tomorrows
		});

	}
	

	render() {

		
		return(
		<div className='nav nav-tabs' id='nav-tab' role='tab'>	
			<Tabs>
          <TabList>
            <Tab>Today</Tab>
            <Tab>Tomorrow</Tab>
          </TabList>

          <TabPanel>
            <Weather weatherData={this.state.todaysData}/>
           </TabPanel>
           
          <TabPanel>
            <Weather weatherData={this.state.tomorrowsData}/>
          </TabPanel>

        </Tabs> 
        </div>
       
		);
	}
}

export default DisplayTabs;