import { describe, expect, it } from "bun:test";
import {isWhitespace} from "./utils"

describe("Utils", () => {
  it("Whitespace", () => {
    expect(isWhitespace(' ')).toBe(true);
	expect(isWhitespace('p')).toBe(false);
  });
  it("Yo", () => {
	  expect(1+1).toBe(2)
  })
});