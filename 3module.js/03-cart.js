const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {

    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };


    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const {name} = this.items[i];

      if (productName === name) {
        console.log('Find a product', productName);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const {items} = this;
    let totalPrice = 0;

    for (const {price, quantity} of items) {
        totalPrice += price * quantity;
        
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    // for (const item of this.items) {
    //   if (item.name === productName) {
    //     item.quantity += 1;
    //     return;
    //   }
    // }
  },
  decreaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (item.name === productName) {
        item.quantity -= 1;
  
        return;
      }
    }
  },
};


// const {items, getItems, add, remove, clear, countTotalPrice, increaseQuantity,descreaceQuantity} = cart;

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍉', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍎', price: 110 });
// cart.add({ name: '🍍', price: 200 });



console.table(cart.getItems());

console.log('Total : ', cart.countTotalPrice());

cart.remove('🍋');

console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());


