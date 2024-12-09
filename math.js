export function divide(a, b) {
    if (
        typeof a !== 'number' ||
        typeof b !== 'number'
    ) {
        throw new Error('Invalid parameter value');
    }
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}