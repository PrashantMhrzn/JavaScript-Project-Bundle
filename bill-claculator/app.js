class UI {
    deleteTotal() {
        if(document.querySelector('.total') != null) {
            document.querySelector('.total').remove();
        }
    }

    appendItem(menuItem) {
        const purchasedItems = document.querySelector('#purchased-items');
        purchasedItems.innerHTML += menuItem; 
    }

    resetPurchaseItem() {
        const pitem = document.querySelector('#purchased-items');
        pitem.innerHTML = '';
    }

    calculate() {
        const purchasedItems = document.querySelector('#purchased-items');
        const price = purchasedItems.querySelectorAll('#price');
        let totalPrice = 0;
        price.forEach(function (item) {
            let str = item.textContent;
            let itemPrice = parseInt(str[1]+str[2]);
            totalPrice += itemPrice;
        })
        this.showTotal(totalPrice);
    }

    showTotal(totalPrice) {
        if(document.querySelector('.total') === null) {
            const total = document.createElement('input');
            total.setAttribute('value', `Total:$ ${totalPrice}.00`);
            total.setAttribute('disabled', '');
            total.className = 'total';
            const  checkOut = document.querySelector('#show-total');
            checkOut.appendChild(total);
        }else {
            this.deleteTotal();
        }
    }

    showAlert(msg, type) {
        const div = document.createElement('div');
        div.className = `alert ${type}`;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container');
        const table = document.querySelector('#add-item');
        container.insertBefore(div, table);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

//instantiate UI class
const ui = new UI();

//listen for add to cart
document.querySelector('#cart').addEventListener('click', function() {
    const item = document.querySelector('#item').value;
    //checking if input is valid
    if (item <= 0 || item > 5) {
        ui.showAlert('Please Select A Validf Item!', 'error');
    } else {
        const menuItem = document.getElementById(`${item}`);
        //append menu item to purchased item
        ui.appendItem(menuItem.innerHTML);
    }
    
});

// listen for check out
document.querySelector('#check-out').addEventListener('click', function() {
    
    ui.showAlert('Purchase complete!', 'success');
    ui.resetPurchaseItem();
    ui.deleteTotal();
});
    
//listen for show total
document.querySelector('#total-button').addEventListener('click', function() {
    ui.calculate();
});

