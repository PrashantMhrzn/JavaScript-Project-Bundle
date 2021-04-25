class Covid {
    async getCovidData() {
        const response = await fetch('https://data.askbhunte.com/api/v1/covid/summary');
        const data = await response.json();
        return data;
    }

    async getTotalCovodData() {
        const response = await fetch('https://corona.askbhunte.com/api/v1/data/nepal');
        const totalData = await response.json();
        return totalData;
    }
}