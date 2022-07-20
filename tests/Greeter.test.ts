import { Greeter } from "../src/Greeter";

describe("Greeter Class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("that the greeting and name properties are in place by trying new strings", () => {
    const greeter = new Greeter("Sup");
    expect(greeter.greeting).toBe("Sup");
  });
});
