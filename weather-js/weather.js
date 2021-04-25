class Weather {
    constructor() {
        this.apiKey = '49a6729f58822c2c8f7d5343256332a8';
        this.city = 'kathmandu';
    }

    async getData() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        const data = await response.json();
        return data;
    }

    changeLocation(city) {
        this.city = city;
    }
}