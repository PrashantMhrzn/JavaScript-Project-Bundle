class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
    }

    removeBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

// listen for add
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
    const ui = new UI;

    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all the fields!', 'error');
    } else {
        const book = new Book(title, author, isbn);
        ui.addBookToList(book);
        ui.clearFields();
        ui.showAlert('New Book Added!', 'success');
    }

    e.preventDefault();
})

// listen for delete
document.querySelector('#book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.removeBook(e.target);
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
})

// listen for mouse hover over title
heading = document.querySelector('h2');
heading.addEventListener('mousemove', function(e) {
    heading.style.color = `rgb(${e.offsetX}, ${e.offsetY}, 90)`;
})