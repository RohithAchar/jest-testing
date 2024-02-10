const calculator =  {
    add(op1, op2){
        if(op1 && !op2) return op1;
        if(!op1 && op2) return op2;
        if(!(op1 || op2)) return null;
        if((op1 >= 'a' || op1 <= 'z') || (op2 >= 'a' || op2 <= 'z')) return null;
        return parseFloat(op1) + parseFloat(op2);
    },
    subtract(op1, op2){
        if(op1 && !op2) return op1;
        if(!op1 && op2) return op2;
        if(!(op1 || op2)) return null;
        if((op1 >= 'a' || op1 <= 'z') || (op2 >= 'a' || op2 <= 'z')) return null;
        op1 = parseFloat(op1);
        op2 = parseFloat(op2);
        return op1 - op2;
    },
    divide(op1, op2){
        if(!(op1 || op2)) return null;
        if((op1 >= 'a' || op1 <= 'z') || (op2 >= 'a' || op2 <= 'z')) return null;
        if(op2 === 0) {
            throw new Error('Infinite')
        };
        op1 = parseFloat(op1);
        op2 = parseFloat(op2);
        return op1 / op2;
    },
    multiply(op1, op2){
        if(!(op1 || op2)) return null;
        if((op1 >= 'a' || op1 <= 'z') || (op2 >= 'a' || op2 <= 'z')) return null;
        op1 = parseFloat(op1);
        op2 = parseFloat(op2);
        return op1 * op2;
    }
}
export default calculator;