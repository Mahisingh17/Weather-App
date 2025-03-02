import { createContext, useState, useEffect } from "react";
import { fetchWeather, fetchForecast } from "../services/weatherService";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchWeatherData = async (location) => {
        setLoading(true);
        setError(null); 
        try {
            const weatherData = await fetchWeather(location);
            setWeather(weatherData);
            const forecastData = await fetchForecast(location);
            setForecast(forecastData);
            setError(null);
        } catch (err) {
            setError("Unable to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(`${latitude},${longitude}`);
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    fetchWeatherData("auto:ip");
                }
            );
        } else {
            console.warn("Geolocation not supported. Using IP-based location.");
            fetchWeatherData("auto:ip");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <WeatherContext.Provider value={{ weather, forecast, loading, error, fetchWeatherData, setError }}>
            {children}
        </WeatherContext.Provider>
    );
};
