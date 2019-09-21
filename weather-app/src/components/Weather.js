import React from 'react'
import HourlyWeather from './HourlyWeather'

class Weather extends React.Component {

	render() {
		return(
			<div>
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.responseData && <HourlyWeather/>}
				{this.props.error && <h2>Please Enter a value</h2>}
			</div>
		);
	}
}

export default Weather;