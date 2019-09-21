import React from 'react'

class HourlyWeather extends React.Component {

	render() {
		return(
			<div>
				{this.props.weather && <p> Date Time: {this.props.weather[0].dt_txt}</p>}
				{this.props.weather && <p>Max Temperature: {this.props.weather[0].main.temp_max}</p>}
				{this.props.weather && <p>Min Temperature: {this.props.weather[0].main.temp_min}</p>}
				{this.props.weather && <p>Humidity: {this.props.weather[0].main.humidity}</p>}
				{this.props.weather && <p>{this.props.weather[0].weather.description}</p>}
			</div>
		);
	}
}

export default HourlyWeather;