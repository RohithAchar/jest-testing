import calculator from "../scripts/calculator";
//Addition
test('sum of two numbers', () => 
    expect(calculator.add(1, 2)).toBe(3)
);
test('sum of negative numbers', () => 
    expect(calculator.add(1, -2)).toBe(-1)
);
test('sum of floating numbers', () => 
    expect(calculator.add(1.5, 2.5)).toBe(4)
);
test('sum of two strings of number', () => 
    expect(calculator.add('10', '20')).toBeNull()
);
test('sum of one strings of number', () => 
    expect(calculator.add(10, '20')).toBeNull()
);
test('empty parameter', () => 
    expect(calculator.add()).toBeNull()
);
test('one parameter', () => 
    expect(calculator.add(10, )).toBe(10)
);
//Subtraction
test('difference of two numbers', () => 
    expect(calculator.subtract(3, 2)).toBe(1)
);
test('difference of negative numbers', () => 
    expect(calculator.subtract(1, -2)).toBe(3)
);
test('difference of floating numbers', () => 
    expect(calculator.subtract(1.5, 2.5)).toBe(-1)
);
test('difference of two strings of number', () => 
    expect(calculator.subtract('10', '20')).toBeNull()
);
test('difference of one strings of number', () => 
    expect(calculator.subtract(10, '20')).toBeNull()
);
test('empty parameter', () => 
    expect(calculator.subtract()).toBeNull()
);
test('one parameter', () => 
    expect(calculator.subtract(10, )).toBe(10)
);

//Division
test('division on two numbers', () => 
    expect(calculator.divide(10, 2)).toBe(5)
);
test('divisible by zero', () => 
    expect(() => calculator.divide(10, 0)).toThrow()
);

//Multiply
test('multiplication of two numbers', () => 
    expect(calculator.multiply(10,2)).toBe(20)
);