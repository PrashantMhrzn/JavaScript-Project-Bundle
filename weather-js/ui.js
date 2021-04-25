class UI{
    constructor() {
        this.location  = document.querySelector('#w-location');
        this.string  = document.querySelector('#w-string');
        this.description  = document.querySelector('#w-description');
        this.details  = document.querySelector('#w-details');
        this.humidity  = document.querySelector('#w-humidity');
        this.feelsLike  = document.querySelector('#w-feels-like');
        this.icon  = document.querySelector('#w-icon');
        this.wind = document.querySelector('#w-wind');

    }

    insertData(data) {
        this.location.textContent = data.name;
        this.string.textContent = `${data.main.temp}°C`;
        this.description.textContent = data.weather[0].main;
        // this.details.textContent = data.weather[0].description;
        this.icon.setAttribute('src', 'icon2.png');
        this.humidity.textContent = `Humidity: ${data.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${data.main.feels_like}°C`;
        this.wind.textContent = `Wind: ${data.wind.speed} Kmph`;
    }
}