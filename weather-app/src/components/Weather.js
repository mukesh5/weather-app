import React from 'react'
import HourlyWeather from './HourlyWeather'

class Weather extends React.Component {

	render() {
		//console.log(this.props.responseData.list[0].dt_txt.split(' ')[0].split('-'))
		return(


			<div className='nav nav-pills'>
				{this.props.weatherData && <HourlyWeather weatherHourly={this.props.weatherData} />}
				{this.props.error && <h2>Please Enter a value</h2>}
			</div>
		);
	}
}

export default Weather;