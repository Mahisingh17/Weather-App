import { useState, useContext, useEffect } from "react";
import { Input, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { WeatherContext } from "../context/WeatherContext";
import { useMediaQuery } from "react-responsive";

const { Search } = Input;

const SearchBar = () => {
    const [city, setCity] = useState("");
    const { fetchWeatherData, setError } = useContext(WeatherContext);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(`${latitude},${longitude}`);
                },
                () => {
                    fetchWeatherData("auto:ip");
                }
            );
        } else {
            fetchWeatherData("auto:ip");
        }
    };

    useEffect(() => {
        getCurrentLocation();
        // eslint-disable-next-line
    }, []);

    const handleSearch = (value) => {
        if (value.trim() === "") {
            getCurrentLocation();
        } else {
            fetchWeatherData(value);
        }
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setCity(value);

        if (value.trim() === "") {
            setError(null);
            getCurrentLocation();
        }
    };

    return (
        <div className="search-bar p-3">
            <Search
                placeholder="Enter city name..."
                allowClear
                enterButton
                size="large"
                value={city}
                style={{ width: "50%" }}
                onChange={handleChange}
                onSearch={handleSearch}
            />
            <Button type="default" icon={<EnvironmentOutlined />} size="large" onClick={getCurrentLocation}>
                {isMobile ? (""):("Use Current Location")}
            </Button>
        </div>
    );
};

export default SearchBar;
