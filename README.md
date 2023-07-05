# Waether_Info
project exercise into react with Http request from API waether. [Try the app](https://)

[See repository](https://github.com/Gromarant/Waether_Info)

<br>

<details><summary>The application meets the following 
requirements:</summary>

<br>
<br>

1. The WeatherList component is rendered, displaying the extended forecast information for the next few days.

2. By default, the forecast for the user location is shown.

3. The WeatherCard component is used to display the weather information for the next few hours of a specific day, including time, temperature, weather conditions, and an accompanying weather illustration.

4. The user can search for a specific city using the form input field and the search button.

5. Upon entering a new city and clicking the button, the information is updated with the data corresponding to the searched city.

6. The WeatherList component is updated to show the extended forecast for the newly searched city.

7. An image illustrating the weather for each day is displayed alongside the weather information.

8. The WeatherList component is updated to show the extended forecast for the newly searched city.

</details>
<br>

![TodoReact Illustrations](/src/assets/Illustrations.png "Weather app React.js and sass")

<br>
<br>
<br>

![TodoReact Illustrations](/src/assets/WeatherCaptures.png "Weather app React.js look and feel")

<br>
<br>

## Application flow:


The WeatherList component is responsible for rendering the list of extended forecast items.

The WeatherCard component is used to display the weather information for each day. 

Initially, the WeatherList component displays the extended forecast for Madrid.
The user can enter a city name in the input field and click the search button to update the weather information.

The application retrieves weather data using the Weather API's 3-hour Forecast for 5 days.

The fetched data is then processed and displayed in the WeatherList and WeatherCard components.

The weather illustration images are associated with each day's weather conditions and displayed alongside the relevant information.

<br>

## Application operation:

Search for a location weather information, Locate the search input field and type the name of the city you want to search for in the input field. Make sure to enter the city name accurately.

ou can initiate the search by either clicking the search button or pressing the Enter key on your keyboard. This action will trigger the search functionality of the app.

<br>

## License

This project is distributed under the **MIT License**. You can refer to the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.

<br>

### Next steps and deployment on Netlify:

For the next steps, the following improvements could be considered:

- Implement unit and integration tests to ensure code quality. 
- Implement data persistence using a database or local storage.
- Improve the user interface with more attractive styles and layouts responsive.

<br>
<br>

---
[<img align="left"  height="64" src="./src/assets/logo2023.png">](https://www.gromarant.com/)

<br>

[© 2023 Mariangelica Rodriguez.](https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/) All rights reserved.

<br>

---