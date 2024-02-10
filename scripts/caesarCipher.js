const caesarCipher = (word) => {
    word = word.toUpperCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$_'.toUpperCase();
    const shifted = 'defghijklmnopqrstuvwxyzabc3456789012$_!@#'.toUpperCase();
    let generated = '';
    for(let i = 0; i < word.length; i++){
        const index = alphabets.indexOf(word[i]);
        generated += shifted.charAt(index);
    }
    return generated;
}
export default caesarCipher;