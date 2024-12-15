import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
	it('should add two numbers together', () => {
		expect(add(2,2)).toBe(4);
	});
	it('should parse strings into numbers', () => {
		expect(add('1', '1')).toBe(2);
	})
	it('should throw errors if inputs are not number', () => {
		expect(() => add(2, 'potato')).toThrow('not a number');
	})
});

describe('subtract', () => {
	it('should subtract the second number from the first number', () => {
		expect(subtract(4, 2)).toBe(2);
	});

	it('should accept and attract all the numbers in an array', () => {
		expect(subtract([10, 5], 2)).toBe(3);
		expect(subtract([10, 5, 1], 2)).toBe(2);
	});

});

describe('multiply', () => {
	it('should multiple two numbers together', () => {
		expect(multiply(2, 3)).toBe(6);
	});
});

describe('divide', () => {
	it('should divide the first number by the second number', () => {
		expect(divide(4, 2)).toBe(2);
	});
});
