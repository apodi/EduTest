function inefficientFilterArray(arrayA, arrayB) {
    return arrayA.filter(item => arrayB.findIndex(b => b === item) === -1);
}

function optimizedFilterArraySet(arrayA, arrayB) {
    const setB = new Set(arrayB); // Convert arrayB to a Set for O(1) lookup
    return arrayA.filter(item => !setB.has(item)); // Use filter to exclude items in setB
}

module.exports = { inefficientFilterArray , optimizedFilterArraySet }

// Creating Set(arrayB) is O(m) (one-time operation).
// Filtering arrayA using Set.has() is O(n) (one-time iteration).
// Total time complexity = O(n + m), much faster than O(nm).