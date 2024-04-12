import { describe, it, expect } from "vitest";
import { isSubsequence } from "./isSubsequence";

describe("isSubsequence", function () {
    it("should return true if the first string is a substring of the second", function () {
        expect(isSubsequence("hello", "hello world")).toBe(true);
        expect(isSubsequence("sing", "sting")).toBe(true);
        expect(isSubsequence("abc", "abracadabra")).toBe(true);
        expect(isSubsequence("", "abc")).toBe(true);
    });
    
    it("should return false if the first string is not a substring of the second", function () {
        expect(isSubsequence("abc", "acb")).toBe(false);
        expect(isSubsequence("notasubstring", "banana")).toBe(false);
        expect(isSubsequence("almost", "almossssss")).toBe(false);
        expect(isSubsequence("abc", "")).toBe(false);
    });
});
