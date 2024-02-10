const reverse = (string) => {
    if(!(string >= 'a' || string <= 'z')) return null
    let reverse = "";
    for(let i = string.length - 1; i >= 0; i--){
        reverse += string.charAt(i);
    }
    return reverse;
}
export default reverse;