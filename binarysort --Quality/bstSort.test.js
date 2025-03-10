const bstSort = require("./bst");

describe("BST Sort Function", () => {
    test("Sort an array of lowercase strings", () => {
        expect(bstSort(["banana", "apple", "cherry", "date", "grape"]))
            .toEqual(["apple", "banana", "cherry", "date", "grape"]);
    });


    test("Sort an array with mixed case letters (case-sensitive)", () => {
        expect(bstSort(["Banana", "apple", "Cherry", "date"]))
            .toEqual(["Banana", "Cherry", "apple", "date"]);
    });
    
    test("Sort an array with a single element", () => {
        expect(bstSort(["apple"])).toEqual(["apple"]);
    });

    test("Sort an array with special characters", () => {
        expect(bstSort(["apple", "#banana", "cherry", "date"]))
            .toEqual(["#banana", "apple", "cherry", "date"]);
    });
});
