class Car1 {
  static newProperty = 'Нова властивість';
  static logInfo(carObj) {
    console.log('Обєкт логІнфо', carObj);
  }

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  get price() {
    return this._price
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const carInctance = new Car1({
  brand: 'Mercedes',
  model: 'E200',
  price: 55000,
});

// carInctance.changePrice(10000);
// carInctance.updateModel('GLE');
Car1.logInfo(carInctance);

console.dir(Car1);

console.log(carInctance.model);

carInctance.model = 'GLE';

console.log(carInctance.model);
carInctance.price = 50000

console.log(carInctance.price);

console.log(carInctance)