import React from 'react'
import HourlyWeather from './HourlyWeather'

class Weather extends React.Component {

	render() {
		return(
			<div>
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[0]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[1]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[2]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[3]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[4]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[5]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[6]} />}
				{this.props.responseData && <HourlyWeather weather={this.props.responseData.list[7]} />}
				{this.props.error && <h2>Please Enter a value</h2>}
			</div>
		);
	}
}

export default Weather;