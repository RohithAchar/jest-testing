import analyzeArray from "../scripts/analyzeArray";
test('normal array', () => {
    const expected = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      };
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expected);
});
test('empty array', () => {
    expect(analyzeArray([])).toBeNull();
});
test('no parameter', () => {
    expect(analyzeArray()).toBeNull();
});
test('not an array', () => {
    expect(analyzeArray(10)).toBeNull();
});