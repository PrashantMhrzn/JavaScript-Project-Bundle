class UI {
    constructor() {
        this.totalCases = document.querySelector('#total-cases');
        this.active = document.querySelector('#active-cases');
        this.death = document.querySelector('#death');
        this.recovered = document.querySelector('#recovered');
        this.table = document.querySelector('#age-table');
        this.totalCasesTillNow = document.querySelector('#total-cases-till-now');
        this.totalPositive = document.querySelector('#total-positive');
        this.totalNegative = document.querySelector('#total-negative');
        this.totalDeath = document.querySelector('#total-death');
        this.totalRecovered = document.querySelector('#total-recovered');
    }

    showData(data) {
        this.totalCases.innerHTML = data.total;
        this.active.innerHTML = data.current_state[0].count;
        this.death.innerHTML = data.current_state[1].count;
        this.recovered.innerHTML = data.current_state[2].count;
        let output = '';
        data.age_group.cases.forEach((item, index) => {output += `
        <tr id="table-data${index}">
            <td>${item.age}</td>
            <td>${item.count}</td>
        </tr>
        `});
        this.table.innerHTML = output;
        data.age_group.deaths.forEach((item, index) => {
            document.querySelector(`#table-data${index}`).innerHTML += `<td>${item.count}</td>`
        });
        data.age_group.recovered.forEach((item, index) => {
            document.querySelector(`#table-data${index}`).innerHTML += `<td>${item.count}</td>`
        });
        
    }

    showTotalData(totalData) {
        this.totalCasesTillNow.innerHTML = totalData.tested_total;
        this.totalPositive.innerHTML = totalData.tested_positive;
        this.totalNegative.innerHTML = totalData.tested_negative;
        this.totalRecovered.innerHTML = totalData.recovered;
        this.totalDeath.innerHTML = totalData.deaths;

    }
}