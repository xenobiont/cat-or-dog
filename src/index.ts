// your code here
interface HasAName {
	name: string;
}

interface Cat extends HasAName {
	meow: () => void;
}

interface Dog extends HasAName {
	woof: () => void;
}

type Pet = Cat | Dog;

const cat: Cat = {
	name: 'Garfield',
	meow() {
		console.log('meow!');
	},
};

cat.meow();

const dog: Dog = {
	name: 'Scooby',
	woof() {
		console.log('woof!');
	},
};

dog.woof();

const pet: Pet = cat;

function isDog(pet: Pet): pet is Dog {
	return 'woof' in pet;
}

if (isDog(pet)) {
	pet.woof();
}
