# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Weather App
This is a simple React-based Weather App that allows users to search for and view current weather information for any city in the world. The app fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface...

## Project link
[https://see-weathers.netlify.app/](https://see-weathers.netlify.app/)

## Features
- City Search: Users can input the name of any city to get real-time weather information.
- Weather Information: The app displays key weather details such as temperature, humidity, weather conditions, and how the weather feels.
- Dynamic Icons: Weather icons change based on the current weather conditions (e.g., sunny, rainy, or cold).
- Responsive Design: The app is designed to be responsive and works well on both desktop and mobile devices.
- Attractive UI: The app features a clean, modern interface with gradient backgrounds and subtle visual effects.
  
## Installation
To run the Weather App locally on your machine, follow these steps:

## Clone the repository:


- git clone https://github.com/teslaa143/Weather-App.git
cd weather-app

## Install the dependencies:

npm install
## Start the development server:
npm start

## Open the app:
Open your browser and go to http://localhost:5173/ to view the app.

## Usage
- Enter the name of the city you want to check the weather for in the search box.
- Click the "Search" button.
- The app will display the current weather information for the city, including temperature, humidity, and weather conditions.
- 
## API
This app uses the OpenWeatherMap API to fetch weather data. You will need an API key to use this service. Replace the API_KEY in the code with your own key.

const API_KEY = "2803fb1a3a057bcb2aad4872d8d3a057";
