import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import DisplayTabs from './components/DisplayTabs';



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
              <div className='container'>
                <div className='jumbotron'>
                  <Titles/>
                </div>
              </div>
               
              <div className='form-group text-center'>
                 <Form  getWeather={this.getWeather}/>
                 
                 {this.state.responseData && <DisplayTabs responseData={this.state.responseData}/>}
              
                 {this.state.error && <h3 className='text-warning'>Please Enter a city</h3>}

              </div>
              
    
      </div>
      );
  }
}

export default App;

        
        