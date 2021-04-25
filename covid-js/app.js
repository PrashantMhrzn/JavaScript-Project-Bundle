const covid = new Covid();
const ui = new UI();

covid.getCovidData()
    .then(data => {
        console.log(data);
        ui.showData(data);
    })

covid.getTotalCovodData()
    .then(totalData => {
        console.log(totalData);
        ui.showTotalData(totalData);
    })
// document.addEventListener('DOMContentLoaded', showData);

