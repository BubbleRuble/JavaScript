const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.sayHi = function () {
  console.log(this);
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const myCar = new Car({
  brand: 'Audi',
  model: 'Q6',
  price: 50000,
});
console.log(myCar);
myCar.changePrice(10000);

const myCar2 = new Car({
  brand: 'Mercedes',
  model: 'E200',
  price: 55000,
});
console.log(myCar2);

const myCar3 = new Car({
  brand: 'Porsche',
  model: '992 (911)',
  price: 65000,
});
console.log(myCar3);

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};

const mango = new User({
  email: 'm@ngo123',
  password: '123456789',
});

console.log(mango);
mango.changePassword('НОВИЙ ПАРОЛЬ');
console.log(mango);
