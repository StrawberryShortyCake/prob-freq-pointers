import { describe, it, expect } from "vitest";
import { canConstructWord } from "./canConstructWord";

describe("canConstructWord", function () {
    it("should return false for empty letters string", function () {
        expect(canConstructWord("abcd", [""])).toBe(false);
    });
    
    it("should return true for empty message", function () {
        expect(canConstructWord("", ["a", "b", "c"])).toBe(true);
    });
    
    it("should account for duplicates", function () {
        expect(canConstructWord("aa", ["a", "b", "c", "d"])).toBe(false);
    });
    
    it("should handle large cases", function () {
        expect(canConstructWord("skbjjjvnnd", ["s", "k", "b", "j", "j", "j", "v", "n", "n", "d"])).toBe(true);
    });
    
    it("should return false if some letters not contained", function () {
        expect(canConstructWord("bcd", ["a", "b", "c"])).toBe(false);
    });
    
    it("should return true if all letters contained", function () {
        expect(canConstructWord("abc", ["a", "b", "c", "d"])).toBe(true);
    });
});
