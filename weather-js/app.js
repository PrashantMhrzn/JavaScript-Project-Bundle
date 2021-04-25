const weather = new Weather();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getData);

document.querySelector('#new-city').addEventListener('click', (e) => {
    const city = document.querySelector('.input-city').value;

    weather.changeLocation(city);

    getData();
});

function getData() {
    weather.getData()
        .then(data => {
            console.log(data);
            ui.insertData(data);
        })
        .catch(err => console.log(err));
}
