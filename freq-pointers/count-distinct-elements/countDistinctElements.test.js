import { describe, it, expect } from "vitest";
import { countDistinctElements } from "./countDistinctElements";

describe("countDistinctElements", function () {
    it("should return a map with distinct keys", function () {
        const result1 = new Map();
        result1.set(1, 2);
        result1.set("one", 1);
        result1.set("1", 1);
        
        const result2 = new Map();
        result2.set("a", 1);
        result2.set("A", 1);
        result2.set(null, 1);
        result2.set(5, 1);
        
        expect(countDistinctElements([1, "one", 1, "1"])).toEqual(result1);
        expect(countDistinctElements(["a", "A", null, 5])).toEqual(result2);
    });
    
    it("should return empty map for empty array", function () {
        expect(countDistinctElements([])).toEqual(new Map());
    });
});
