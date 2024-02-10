const analyzeArray = (arr = []) => {
    if(arr.length === 0) return null;
    if(!(Array.isArray(arr))) return null;
    return {
        average: arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }
        ,0) / arr.length,
        min: arr.reduce((min, number) => Math.min(min, number), arr[0]),
        max: arr.reduce((max, number) => Math.max(max, number), arr[0]),
        length: arr.length
    }
}
export default analyzeArray;