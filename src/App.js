import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <h1>Weather App</h1>
        <table class="centerContainer">
            <tr>
                <td>
                    <label id="cityLabel"
                     for="cityNameTextField"
                     style={{color: "grey"}}>Enter a city: </label>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="cityNameTextField" type="text" name="cityName"/>
                    <input
                        id="submitButton"
                        type="button"
                        value="Submit"
                        onclick="submitAction()"
                    />
                </td>
            </tr>
        </table>
        <div class="spacer"></div>
        <div id="errorMessageComponent" style={{display: "none", color: "red"}}></div>
        <div style={{display: "none"}} class="spinner spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div id="weatherInfoComponent" style={{display: "none"}}>
            <table width="60%" class="centerContainer" cellpadding="5px">
                <tr>
                    <th>Temperature</th>
                    <td id="temperatureField">0</td>
                </tr>
                <tr>
                    <th>Feels Like</th>
                    <td id="feelsLikeField">0</td>
                </tr>
                <tr>
                    <th>Humidity</th>
                    <td id="humidityField">0</td>
                </tr>
                <tr>
                    <th>Atmospheric Pressure</th>
                    <td id="pressureField">0</td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default App;