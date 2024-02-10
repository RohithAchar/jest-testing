import reverse from "../scripts/reverse";
test('reverses a string', () => 
    expect(reverse('Rohith')).toBe('htihoR')
);
test('empty string', () => 
    expect(reverse('')).toBe('')
);
test('Integers', () => 
    expect(reverse(1234)).toBeNull()
);
test('String of numbers', () => 
    expect(reverse('1234')).toBe('4321')
);
test('Special character', () => 
    expect(reverse('abc, d')).toBe('d ,cba')
);
test('Space', () => 
    expect(reverse('12      34')).toBe('43      21')
);