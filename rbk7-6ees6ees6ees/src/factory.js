class BeeHive {

	static classes = {
		grub: Grub,
	};

	static interface = [
		"age", "color", "food"
	];

	static create(type){
		if(!this.classes[type]) {
			throw Error('Class doesn\'t exist')
		}
		return new this.classes[type];
	}

	static add(className) {
		if(!this.validate(className)) 
		 throw Error('Invalid class');
		this.classes[className.name] = className;
	}

	static validate(className) {
		if(typeof className !== 'function') return false;
		var obj = new className();
		var keys = Object.keys(obj)
		for(var key of this.interface){
			if(!keys.includes(key)){
				return false;
			}
		}
		return true;
	}
}