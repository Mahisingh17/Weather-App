import { WeatherProvider } from "./context/WeatherContext";
import Home from "./pages/Home";
import "./styles.css";

function App() {
    return (
        <WeatherProvider>
            <Home />
        </WeatherProvider>
    );
}

export default App;
