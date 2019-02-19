var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes 0 dolars in taxes.");
	}
}

//alert("hoppala hjşksjdfsd");

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Adult("Jane Smith", "Orange");
jane.greet();
jane.payTaxes();