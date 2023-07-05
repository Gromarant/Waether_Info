# Waether_Info
project exercise into react with Http request from API waether

Project Description:

The project involves building a Weather Info application using React, useEffect, and asynchronous programming. The application includes the following components:

WeatherList Component: It iterates over a list of items displaying the extended forecast for the upcoming days.
WeatherCard Component: It contains the weather information for the next few hours of a particular day, including the time, temperature, and weather condition (e.g., clear, clouds, rain).
A form with an input field and a button to search for a specific city.
Flow of the application:

By default, the Weather Info view displays the extended forecast for Madrid. However, when a user enters a city name in the text input field and clicks the button, the information updates with the corresponding data for the searched city.

Extras:

Adding an image to the component to illustrate the weather condition for each day.
On the initial load of the view, replacing Madrid with the user's current geolocation.
Next Steps:

To further enhance the Weather Info application, you can consider the following steps:

Implement error handling and display appropriate messages when the city search or API request fails.
Add unit tests to ensure the correctness of the implemented components and functionalities.
Improve the user interface by styling the components and making them more visually appealing.
Implement a feature to switch between Celsius and Fahrenheit temperature units.
Optimize the API requests by implementing caching mechanisms or using a state management library like Redux.
Deploy the application to a hosting service like Netlify or Vercel to make it accessible online.
Technologies Used:

The project is built using React, specifically utilizing hooks such as useEffect for handling side effects and managing asynchronous operations. The application may make use of additional libraries and tools, such as the UUID package for managing unique keys for list elements. It also relies on the API Weather | 3-hour Forecast 5 days to fetch the weather data for different cities.