import { JavaScriptGreeter } from "../src/JavaScriptGreeter";
import { Greeter } from "../src/Greeter";

describe("JavaScriptGreeter Class", () => {
  test("we have altered 'Greeter' successfully by wrapping in console.log statement", () => {
    const javaScriptGreeter = new JavaScriptGreeter("hey");
    expect(javaScriptGreeter.greeting).toBe("hey");
  });
});
