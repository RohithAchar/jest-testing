const capitalize = (string) => {
    if((!string)) return null;
    if(!(string >= 'a' || string <= 'z')) return null
    const firstLetter = string.charAt(0);
    const capitalLetter = firstLetter.toUpperCase();
    const rest = string.slice(1, string.length)
    return capitalLetter + rest;
}
export default capitalize;