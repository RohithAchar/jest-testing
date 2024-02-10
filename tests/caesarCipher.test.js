import caesarCipher from "../scripts/caesarCipher";

test('a-z', () => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const shifted = 'defghijklmnopqrstuvwxyzabc'.toUpperCase();
    for(let i = 0; i < 26; i++){
        expect(caesarCipher(alphabets.charAt(i))).toBe(shifted.charAt(i));
    }
});
test('0-9' ,() => {
    const numbers = '0123456789'.toUpperCase();
    const shifted = '3456789012'.toUpperCase();
    for(let i = 0; i < numbers.length; i++){
        expect(caesarCipher(numbers.charAt(i))).toBe(shifted.charAt(i));
    }
});
test('special characters', () => {
    const sCharacters = '!@#$_';
    const shifted = '$_!@#'
    for(let i = 0; i < sCharacters.length; i++){
        expect(caesarCipher(sCharacters.charAt(i))).toBe(shifted.charAt(i));
    }
});