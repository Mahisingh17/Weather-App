# Weather App

## Overview
This Weather App is a React-based application that fetches real-time weather data from WeatherAPI and displays it in a user-friendly interface. Users can search for a city's weather, view location-based weather details, and switch between Celsius and Fahrenheit units.

## Features
- Fetches real-time weather data from [WeatherAPI](https://www.weatherapi.com/).
- Detects user’s location to show weather details.
- Allows users to search for a city.
- Displays current temperature, humidity, wind speed, and general weather conditions.
- Provides a weather forecast for the next few days.
- Supports switching between Celsius and Fahrenheit.
- User-friendly UI with icons for different weather conditions.

## Tech Stack
- **Frontend:** React, CSS, Bootstrap
- **API:** WeatherAPI
- **Deployment:** Netlify

## Live Demo
🚀 [Weather App](https://weather-app-mahima.netlify.app/)

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v14 or later)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/Mahisingh17/Weather-App.git
cd weather-app
```

### Install Dependencies
```sh
npm install  # or yarn install
```

### Get WeatherAPI Key
1. Sign up at [WeatherAPI](https://www.weatherapi.com/).
2. Get your free API key.
3. Create a `.env` file in the root directory and add:
   ```sh
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

### Run the App Locally
```sh
npm start  # or yarn start
```

## API Integration
This app fetches weather data using the WeatherAPI. Example request:
```js
fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=London`)
  .then(response => response.json())
  .then(data => console.log(data));
```

## Deployment on Netlify
### Step-by-Step Guide
1. **Create a Netlify Account:**
   - Sign up at [Netlify](https://www.netlify.com/) if you haven't already.

2. **Connect Your GitHub Repository:**
   - Go to Netlify Dashboard → New Site from Git
   - Select GitHub and authorize access
   - Choose your `weather-app` repository

3. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Add environment variables:
     - `REACT_APP_WEATHER_API_KEY=your_api_key_here`

4. **Deploy:**
   - Click **Deploy Site** and wait for the process to complete.
   - Once deployed, Netlify provides a live URL.

5. **Custom Domain (Optional):**
   - Navigate to **Domain Settings** in Netlify.
   - Add a custom domain or use the one provided by Netlify.
     
## License
This project is licensed under the MIT License.

## Author
Developed by [Mahima M](https://github.com/Mahisingh17)
