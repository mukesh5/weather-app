import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "3d77f8b8681bd1378379c88ec3d5f84c";

class App extends React.Component {

  state = {
    responseData: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    if(!country){
      country = 'India';
    
  }
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(city);
    console.log(country);
    if(city && country){
      console.log(data);
      this.setState({
        responseData:data,
        error:undefined
      });
    }
    else{
      this.setState({
        responseData: undefined,
        error: 'Please Enter a value'
      });
    }
    
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather responseData={this.state.responseData}
         error={this.state.error}
        />
      </div> 
      );
  }
}

export default App;