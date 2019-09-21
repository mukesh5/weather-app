import React from 'react'

class HourlyWeather extends React.Component {

	render() {
		return(
			<div>
				{this.props.weather.dt_txt && <p> Date Time: {this.props.weather.dt_txt}</p>}
				{this.props.weather.main && <p>Max Temperature: {this.props.weather.main.temp_max}</p>}
				{this.props.weather.main && <p>Min Temperature: {this.props.weather.main.temp_min}</p>}
				{this.props.weather.main && <p>Humidity: {this.props.weather.main.humidity}</p>}
				{this.props.weather.weather && <p>{this.props.weather.weather[0].description}</p>}
			</div>
		);
	}
}

export default HourlyWeather;