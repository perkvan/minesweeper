const menu = {
	_courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get courses () {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
  	const dish = {
  		name: dishName,
      price: dishPrice
		};

    this._courses[courseName].push(dish);
	},

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and for dessert ${dessert.name}. Your price comes to $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Mozarella sticks', 5.50);
menu.addDishToCourse('appetizers', 'Chicken sticks', 7.85);
menu.addDishToCourse('appetizers', 'Buffalo sticks', 9.20);

menu.addDishToCourse('mains', 'Tuna Steak', 25.35);
menu.addDishToCourse('mains', 'Dolphin Nose', 85.27);
menu.addDishToCourse('mains', 'Human Brain', 105.88);

menu.addDishToCourse('desserts', 'Cherries, just a ton of fucking cherries', 0.35);
menu.addDishToCourse('desserts', 'Wafer thin mint', 8.15);
menu.addDishToCourse('desserts', 'Smores', 10.00);

let meal = menu.generateRandomMeal();

console.log(meal);
