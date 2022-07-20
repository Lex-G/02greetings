import { Greeter } from "../src/Greeter";

class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string) {
    return `console.log(${super.greet(name)})`;
  }
}

export { JavaScriptGreeter };

// class GreetByName extends Greeter {
//   constructor(greeting: string, name: string) {
//     super(greeting);
//     this.greeting = `${super.greeting}, ${name}!`;
//   }
// }

// class JavScriptGreeter
