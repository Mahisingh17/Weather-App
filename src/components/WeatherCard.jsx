import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Switch, Result, Spin } from "antd";

const WeatherCard = () => {
    const { weather, forecast, loading, error } = useContext(WeatherContext);
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    if (loading) {
        return (
            <div className="weather-card container">
                <Spin size="large" />
                <p style={{ marginTop: "10px" }}>Loading weather data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="weather-card container">
                <Result
                    status="404"
                    title="City Not Found"
                    subTitle={error}
                />
            </div>
        );
    }

    return (
        weather && forecast && (
            <div className="weather-card container" style={{ textAlign: "center", padding: "20px" }}>
                <h2>{weather.location.name}, {weather.location.country}</h2>
                <div className="weather-icon"><img src={weather.current.condition.icon} alt={weather.current.condition.text} /></div>
                <h3 style={{ margin: "40px 0px 20px" }}>
                    {isFahrenheit ? `${weather.current.temp_f}°F` : `${weather.current.temp_c}°C`}
                </h3>
                <p>{weather.current.condition.text}</p>
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Wind: {weather.current.wind_kph} kph</p>
                <div style={{ margin: "20px 0" }}>
                    <p>Toggle Temperature Unit:</p>
                    <Switch
                        checked={isFahrenheit}
                        onChange={() => setIsFahrenheit(!isFahrenheit)}
                        checkedChildren="°F"
                        unCheckedChildren="°C"
                    />
                </div>
                <div className="forecast row">
                <h2 style={{ marginTop: "20px", color:"#cd9041" }}>5-Day Forecast</h2>
                    {forecast.forecast.forecastday.map((day) => (
                        <div key={day.date} className="forecast-item col-sm-3 col-xxl-2" style={{ margin: "10px", padding: "10px" }}>
                            <h6>{day.date}</h6>
                            <div className="weather-icon"><img src={day.day.condition.icon} alt={day.day.condition.text} /></div>
                            <p>
                                {isFahrenheit ? `${day.day.avgtemp_f}°F` : `${day.day.avgtemp_c}°C`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default WeatherCard;
