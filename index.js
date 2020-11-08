var Dog = require('./Dog');
var Mouse = require('./Mouse');
var Bun = new Dog();
var Jerry = new Mouse();
Bun.eat(Jerry);
console.log(Bun);
console.log("Hi everyone");