class Person {
    constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}

class UI {
    addContact(contact) {
        const list = document.querySelector('#contact-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.address}</td>
        <td><a href="#" class="delete">X</a></td>`
        list.appendChild(row);
    }

    removeContact(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(msg, className) {
        const container = document.querySelector('.container');
        const form = document.querySelector('#contact-form');
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

document.querySelector('#contact-form').addEventListener('submit', function(e) {
    pname = document.querySelector('#name').value;
    phone = document.querySelector('#phone').value;
    address = document.querySelector('#address').value;
    
    const ui = new UI;
    if(pname === '' || phone === '' || address === '') {
        ui.showAlert('Please Fill In All The Fields!', 'error');
    } else {
        const person = new Person(pname, phone, address);
        ui.addContact(person);
        ui.showAlert('Contact Added!', 'success');
    }

    e.preventDefault();
})

document.querySelector('#contact-list').addEventListener('click', function(e) {
    const ui = new UI;
    ui.removeContact(e.target);
    ui.showAlert('Contact Removed!', 'success');
    e.preventDefault();
});