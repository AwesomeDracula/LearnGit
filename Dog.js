function Dog() {
	// body...
	// Something to add
	this.stomach = [];
}

Dog.prototype.eat = function(first_argument) {
	// body...
	this.stomach.push(first_argument);
};