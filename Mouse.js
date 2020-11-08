function Mouse(argument) {
	// body...
	this.stomach = [];
}

Mouse.prototype.eat = function(Cat) {
	this.stomach.push(Cat);
};

module.exports = Mouse;