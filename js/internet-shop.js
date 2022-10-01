
const instruments = [{
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150
}, {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000
}, {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000
}]
const basket = [];
const wish = [];

const list = document.querySelector('.list');
renderProductsList(instruments);

list.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.classList.contains('btn-add')){
        const currentProduct = evt.target.closest("li");
        const currentId = Number(currentProduct.dataset.id);
        
        const productToBasket = { ...instruments.find(({ id }) => id === currentId) };
        const productInBasket = basket.find(({ id }) => id === currentId);

        if (!productInBasket) {
            addNewProductToTheList(productToBasket, basket);
        } else {
            addExistedProductToTheList(productInBasket);
        }

        console.log("basket:", basket);
    }
     if (evt.target.classList.contains('btn-wish-list')){
        const currentProduct = evt.target.closest("li");
        const currentId = Number(currentProduct.dataset.id);
        
        const productToWishList = { ...instruments.find(({ id }) => id === currentId) };
        const productInWishList = wish.find(({ id }) => id === currentId);

        if (!productInWishList) {
           addNewProductToTheList(productToWishList, wish);
        } else {
             addExistedProductToTheList(productInWishList);
        }

        console.log("wish:", wish);
    }
}


function addNewProductToTheList(item, list) {
            item.quantity = 1;
            list.push(item);
}

function addExistedProductToTheList(item) {
    item.quantity += 1;
}

function renderProductsList(products) {
    const markup = products.reduce((acc, product) => acc + `<li class="item" data-id="${product.id}">
        <img src="${product.img}" width="250" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: ${product.price}</p>
        <button type="button" class="btn-add">Add to basket</button>
    <button type="button" class="btn-wish-list">Att to wish list</button>
    </li>`, '');

    list.insertAdjacentHTML('beforeend', markup);
}