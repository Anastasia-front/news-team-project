export function renderWeather(data) {
  const weatherData = {
    location: data.name,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].main,
    icon: data.weather[0].icon,
  };

  const weatherTemplate = `<div class="weather_info">
        <div class="temperature__wrapper">
          <p class="temperature_title" id="temperature">${weatherData.temperature}°</p>
        </div>
        <div class="vl"></div>
        <div class="location_wrapper">
          <p class="description_title" id="description">${weatherData.description}</p>

          <div class="location_container">
            <svg
              class="location_icon"
              width="19"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
              />
            </svg>
            <p class="location__name" id="city">${weatherData.location}</p>
          </div>
        </div>
      </div>

      <img src="http://openweathermap.org/img/wn/${weatherData.icon}@4x.png" alt="Weather icon"  class="weather__img" />
      <div class="date_container">
        <p id="weather__day"></p>
        <div class="date_wrapper">
          <p id="weather__date"></p>
          <p id="weather__month"></p>
          <p id="weather__year"></p>
        </div>
           <div class="weather-date">
        ${updatedDate}
      </div>
      </div>
  
    
  `;

  const weatherContainer = document.querySelector(".weather_container");
  weatherContainer.innerHTML = weatherTemplate;
}
export function formatDate(date) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
// console.log(formattedDate); // Sun, Mar 26, 2023
const date = new Date();
const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" }); // "Sun"
const dayOfMonth = date.getDate(); // 26
const month = date.toLocaleDateString("en-US", { month: "short" }); // "Mar"
const year = date.getFullYear(); // 2023

const updatedDate = `
  <span>${dayOfWeek}</span> 
  <br>
  <span>${dayOfMonth} ${month} ${year}</span>
`;
