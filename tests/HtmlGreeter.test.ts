import HtmlGreeter from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("leaving the tagName empty", () => {
    const result: HtmlGreeter = new HtmlGreeter("hey");
    expect(result.greet("Jeff")).toBe("<h1>hey, Jeff!</h1>");
  });
  test("leaving the tagName empty", () => {
    const result: HtmlGreeter = new HtmlGreeter("hey", "p");
    expect(result.greet("Jeff")).toBe("<p>hey, Jeff!</p>");
  });
});
