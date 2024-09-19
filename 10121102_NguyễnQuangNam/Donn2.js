// Add product
const btn = document.querySelectorAll("button");
btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h1").innerHTML;
        var productPrice = product.querySelector("span").innerHTML;
        addCart(productImg, productName, productPrice);
    });
});

// tao the tr vao bo them thong tin vao table

//---------------------------- ADD cart----------------------------//
function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    // kiem tra neu da ton tai thi khong add nua
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-name .title");
        if (productT[i].innerText == productName) {
            alert("SẢN PHẨM ĐỂ ĐƯỢC THÊM VÀO GIỎ HÀNG ");
            return;
        }
    }
    var trContent = `
    <tr>
        <td class="cart-name">
            <img src="${productImg}" alt="" />
            <span class="title"> ${productName}</span>
           
        </td>
        <td>
            <p ><span class=" price">${productPrice}</span> <sup>đ</sup></p>
        </td>

        <td><input type="number" value="1" min="1" /></td>

        <td class="cart-delete">Xóa</td>
    </tr>
    
    
    `;
    addTr.innerHTML = trContent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addTr); //them bien tr vao trong tbody

    deleteCart();
    cartTotal();
    changeInput();
}
//---------------------------- ToTal----------------------------//
function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var toTalB = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value; // Lay gia tri trong the input
        var product_Price = cartItem[i].querySelector(" .price").innerHTML; //Lay gia tri ben trong span
        var toTalA = inputValue * product_Price * 1000;

        toTalB += toTalA;
    }
    var ToTalC = toTalB.toLocaleString("de-DE");
    var totalPrice = document.querySelector(".price-total span");
    var cartPrice = document.querySelector(".cart-icon span");
    cartPrice.innerHTML = ToTalC;
    totalPrice.innerHTML = ToTalC;
}

//---------------------------- Delete ----------------------------//
function deleteCart() {
    var btnDelete = document.querySelectorAll(".cart-delete");
    btnDelete.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.target.parentElement.remove();
            cartTotal();
        });
    });
}
//---------------------------- ChangeInput ----------------------------//

function changeInput() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValueChange = cartItem[i].querySelector("input");
        inputValueChange.addEventListener("change", function (event) {
            cartTotal();
        });
    }
}

//---------------------------- open and close ----------------------------//
const btnOpen = document.querySelector(".fa-cart-shopping");
btnOpen.addEventListener("click", function (event) {
    document.querySelector(".cart").style.right = "0";
});
const btnClose = document.querySelector(".fa-x");
btnClose.addEventListener("click", function (event) {
    document.querySelector(".cart").style.right = "-100%";
});
const thanhtoan = document.querySelector('#thanhtoan');
const form = document.querySelector('.form');
const daxacnhan = document.querySelector('#daxacnhan');

thanhtoan.addEventListener('click', function(event) {
    event.preventDefault();
    form.style.display = "flex";
});
daxacnhan.addEventListener("click", function (event) {
    document.querySelector(".cart").style.right = "-100%";
   
});
daxacnhan.addEventListener('click', function(event) {
    event.preventDefault();
    form.style.display = "none";
});
