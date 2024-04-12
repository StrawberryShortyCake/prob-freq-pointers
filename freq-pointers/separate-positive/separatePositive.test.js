import { describe, it, expect } from "vitest";
import { separatePositive } from "./separatePositive";

describe("separatePositive", function () {
    it("does nothing to arrays of all positive numbers", function () {
        const arr = [1, 2, 3];
        expect(separatePositive(arr)).toBe(arr);
    });
    
    it("does nothing to arrays of all negative numbers", function () {
        const arr = [-1, -2, -3];
        expect(separatePositive(arr)).toBe(arr);
    });
    
    it("does nothing to arrays already ordered", function () {
        const arr = [-1, -2, -3, 1, 2, 3];
        expect(separatePositive(arr)).toBe(arr);
    });
    
    it("moves positives to the left and negatives to the right", function () {
        const arr = [2, -1, -3, 6, -8, 10];
        separatePositive(arr);
        
        expect(arr[0] > 0).toBe(true);
        expect(arr[1] > 0).toBe(true);
        expect(arr[2] > 0).toBe(true);
        expect(arr[3] < 0).toBe(true);
        expect(arr[3] < 0).toBe(true);
        expect(arr[3] < 0).toBe(true);
        
        const arr2 = [5, 10, -15, 20, 25];
        separatePositive(arr2);
        
        expect(arr2[0] > 0).toBe(true);
        expect(arr2[1] > 0).toBe(true);
        expect(arr2[2] > 0).toBe(true);
        expect(arr2[3] > 0).toBe(true);
        expect(arr2[4]).toBe(-15);
    });
});
