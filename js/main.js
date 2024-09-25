let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = [
    {
        id: 1,
        name: "Concha de chocolate",
        image: "./img/concha_chocolate.webp",
        price: 10,
        category: "panaderia"
    },
    {
        id: 2,
        name: "Muffin de chocolate",
        image: "./img/muffin_chocolate.webp",
        price: 12,
        category: "panaderia"
    },
    {
        id: 3,
        name: "Concha de vainilla",
        image: "./img/concha_vainilla.webp",
        price: 10,
        category: "panaderia"
    },
    {
        id: 4,
        name: "Muffin de elote",
        image: "./img/muffin_elote.webp",
        price: 12,
        category: "panaderia"
    },
    {
        id: 5,
        name: "Dona",
        image: "./img/dona_sencilla.webp",
        price: 10,
        category: "panaderia"
    },
    {
        id: 6,
        name: "Dona doble chocolate",
        image: "./img/dona_doble.webp",
        price: 12,
        category: "panaderia"
    },
    {
        id: 7,
        name: "ChocoPiedra",
        image: "./img/chocopiedra.webp",
        price: 10,
        category: "panaderia"
    },
    {
        id: 8,
        name: "Canasta de fruta",
        image: "./img/canasta_fruta.webp",
        price: 16,
        category: "panaderia"
    },
    {
        id: 9,
        name: "Pay de queso",
        image: "./img/pay_queso.webp",
        price: 16,
        category: "panaderia"
    },
    {
        id: 10,
        name: "Mousse 'Cookies and cream'",
        image: "./img/mousse_cookies.webp",
        price: 16,
        category: "panaderia"
    },
    {
        id: 11,
        name: "Gelatina arcoiris",
        image: "./img/gelatina_arcoiris.webp",
        price: 150,
        category: "gelatinas"
    },
    {
        id: 12,
        name: "Gelatina de cajeta",
        image: "./img/gelatina_cajeta.webp",
        price: 150,
        category: "gelatinas"
    },
    {
        id: 13,
        name: "Gelatina de fresas",
        image: "./img/gelatina_fresa.webp",
        price: 150,
        category: "gelatinas"
    },
    {
        id: 14,
        name: "Gelatina de frutos rojos",
        image: "./img/gelatina_frutos.webp",
        price: 150,
        category: "gelatinas"
    },
    {
        id: 15,
        name: "Gelatina irlandesa",
        image: "./img/gelatina_irlandesa.webp",
        price: 150,
        category: "gelatinas"
    },
    {
        id: 16,
        name: "Gelatina de mango",
        image: "./img/gelatina_mango.webp",
        price: 150,
        category: "gelatinas"
    },
    {
        id: 17,
        name: "Pastel de cafe",
        image: "./img/pastel_cafe.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 18,
        name: "Pastel de chocolate",
        image: "./img/pastel_chocolate.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 19,
        name: "Pastel de coco",
        image: "./img/pastel_coco.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 20,
        name: "Pastel de durazno",
        image: "./img/pastel_durazno.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 21,
        name: "Pastel de fresa",
        image: "./img/pastel_fresa.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 22,
        name: "Pastel irlandes",
        image: "./img/pastel_irlandes.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 23,
        name: "Pastel de tres leches",
        image: "./img/pastel_tres-leches.webp",
        price: 250,
        category: "pasteleria"
    },
    {
        id: 24,
        name: "Pastel de zanahoria",
        image: "./img/pastel_zanahoria.webp",
        price: 250,
        category: "pasteleria"
    },
];

const categorysButtons = document.querySelectorAll(".category button");
const cartShop = document.querySelector("#cart");

/*======= Funcion para elegir 1 de las 3 categorias de productos =======*/
function filterProduct(categoria) {
    let search = products.filter((item) => item.category === categoria);
    showProducts(search);
}

/*======= Evento de los botones pricipales para seleccionar una categoria =======*/
categorysButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let categoryProduct = e.target.textContent;
        cards.style.display = "flex";
        const hideCategorys = document.querySelector(".categorys");
        hideCategorys.style.display = "none"
        const hideButtons = document.querySelector(".buttons");
        hideButtons.style.display = "flex"
        filterProduct(categoryProduct.toLowerCase());
    })
});

/*======= Funcion para mostrar los producctos  =======*/
function showProducts(products) {
    const cards = document.querySelector("#cards");
    cards.innerHTML = ""

    products.forEach(product => {
        /*======= DIV con la clase card =======*/
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img class="card__img" src="${product.image}" alt="">
            <div class="card__container">
                <p class="card__title">${product.name}</p>
                <p class="card__price"> $${product.price}</p>
            </div>
            
                `;
        cards.append(card);

        /*======= DIV que contiene el div con la clase "card__buttons" y el boton "Agregar" =======*/
        const cardContainer = document.createElement("div");
        cardContainer.className = "card__container";

        /*======= DIV que contiene los botones +,- y la cantidad  =======*/
        const cardContainerButtons = document.createElement("div")
        cardContainerButtons.className = "card__buttons";

        cardContainer.append(cardContainerButtons)
        card.append(cardContainer)

        /*======= Boton para disminuir la cantidad =======*/
        const buttonLess = document.createElement("button");
        buttonLess.className = "card__button-amount";
        buttonLess.innerHTML = `<i class="fa-solid fa-minus"></i>`;

        /*======= Parrafo que contiene la cantidad =======*/
        const labelAmount = document.createElement("p");
        labelAmount.className = "amount"
        labelAmount.innerText = "1";

        /*======= Boton para aumentar la cantidad =======*/
        const buttonPlus = document.createElement("button");
        buttonPlus.className = "card__button-amount";
        buttonPlus.innerHTML = `<i class="fa-solid fa-plus"></i>`;

        /*======= Eventos para disminuir y aumentar la cantidad =======*/
        let amount = 1;
        buttonLess.addEventListener("click", () => {
            if (amount > 1) {
                amount--;
                labelAmount.innerText = amount;
            }
        });
        buttonPlus.addEventListener("click", () => {
            amount++;
            labelAmount.innerText = amount;
        });

        cardContainerButtons.append(buttonLess)
        cardContainerButtons.append(labelAmount)
        cardContainerButtons.append(buttonPlus)

        /*======= Boton que agrega los productos al carrito =======*/
        const buttonAdd = document.createElement("button");
        buttonAdd.className = "card__button"
        buttonAdd.innerText = "Agregar";
        buttonAdd.addEventListener("click", () => {
            addProductCart(product, parseInt(labelAmount.textContent));
            showMessage();
            labelAmount.innerText = "1";
            amount = 1
        })
        cardContainer.append(buttonAdd);
    });
}

// showProducts(products);

/*======= Eventos para abrir y cerra el carrito =======*/
const openCart = document.querySelector("#openCart");
openCart.addEventListener("click", () => {
    cartShop.style.left = "65%"
})
const closeCart = document.querySelector("#closeCart");
closeCart.addEventListener("click", () => {
    cartShop.style.left = "100%"
})

/*======= Funcion que muestra un mensaje cada que se agrega un producto =======*/
function showMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(function () {
        message.style.display = "none";
    }, 800);
}

/*======= Funcion que agrega los productos en el carrito =======*/
function addProductCart(product, amount) {
    let itemAdd = cart.find((item) => item.name === product.name);

    if (itemAdd) {
        itemAdd.amount += amount;
    } else {
        cart.push({ ...product, amount });
    }
    updateCart();
}

const cartItems = document.querySelector("#items");

/*======= Funcion para mostrar y actualizar el carrito =======*/
function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-shop__item";
        cartItem.innerHTML = `
        <img class="cart-shop__img" src="${item.image}" alt="img">
        <p class="item__title">${item.name}</p>
        <p class="item__price">$${item.price}</p>
        <p class="item__amout">${item.amount}</p>
        <p class="item__total">$${item.price * item.amount}</p>
        `;
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can fa-xl"></i>';
        deleteButton.addEventListener("click", () => {
            deleteCart(item);

        });
        cartItem.append(deleteButton);
        cartItems.append(cartItem);
        emptyCart()
    })
    const cartTotal = document.querySelector("#total");
    let total = cart.reduce((acc, prod) => acc + (prod.price * prod.amount), 0);
    cartTotal.innerText = `${total}`;
    localStorage.setItem("cart", JSON.stringify(cart));

}

/*======= Funcion para eliminar los productos del carrito =======*/
function deleteCart(product) {
    let index = cart.findIndex((item) => item.id === product.id);
    cart.splice(index, 1);
    updateCart()
}

/*======= Funcion para vaciar el carrito =======*/
function emptyCart() {
    let emptyCartButton = document.querySelector(".cart-shop__button")
    emptyCartButton.addEventListener("click", () => {
        cart.length = 0
        localStorage.setItem("cart", JSON.stringify(cart))
        updateCart();
    })
}

updateCart();



