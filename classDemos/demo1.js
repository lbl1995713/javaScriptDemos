class Logger {
	constructor() {
		this.printName = this.printName.bind(this)
	}
  printName(name = 'Tom') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
console.log(printName)
printName()