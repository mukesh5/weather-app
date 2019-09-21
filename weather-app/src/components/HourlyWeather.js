import React from 'react'

class HourlyWeather extends React.Component {

	render() {
		var hourlyData = [];
		for(var i=0; i<this.props.weatherHourly.length; i++)
		{
			hourlyData.push(
				<div>
				<p> date-time: {this.props.weatherHourly[i].dt_txt}</p>
				<p>Max Temperature: {this.props.weatherHourly[i].main.temp_max}</p>
				<p>Min Temperature: {this.props.weatherHourly[i].main.temp_min}</p>
				<p>Humidity: {this.props.weatherHourly[i].main.humidity}</p>
				<p>Description: {this.props.weatherHourly[i].weather[0].description}</p>
				</div>
				);
		}
		return(
			<div>
				{hourlyData}
			</div>
		);
	}
}

export default HourlyWeather;