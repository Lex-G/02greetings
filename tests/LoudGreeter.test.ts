import LoudGreeter from "../src/models/LoudGreeter";

describe("LoudGreeter Class", () => {
  test("extra property has default value", () => {
    const result: LoudGreeter = new LoudGreeter("Hello");
    expect(result.greet("Lex")).toBe("Hello, Lex!!");
  });
  test("extra property has default value", () => {
    const result: LoudGreeter = new LoudGreeter("Hello");
    result.addVolume();
    expect(result.greet("Lex")).toBe("Hello, Lex!!!");
  });
});
