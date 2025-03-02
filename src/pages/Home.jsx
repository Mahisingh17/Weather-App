import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
    return (
        <div className="home">
            <SearchBar />
            <WeatherCard />
        </div>
    );
};

export default Home;
