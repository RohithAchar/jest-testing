import capitalize from "../scripts/capitalize";

test('First letter is capital', () => {
    expect(capitalize('hi there')).toBe('Hi there');
});
test('Special character', () => {
    expect(capitalize('hi, there')).toBe('Hi, there');
});
test('Null', () => {
    expect(capitalize('')).toBeNull();
});
test('Integer', () => {
    expect(capitalize(1)).toBeNull();
});
test('First letter capital', () => {
    expect(capitalize('Hi there')).toBe('Hi there');
});
test('String of numbers', () => {
    expect(capitalize('123 123')).toBe('123 123');
});