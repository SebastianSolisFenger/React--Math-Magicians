import { cleanup } from '@testing-library/react';
import calculate from '../../logic/calculate';

afterEach(cleanup);

describe('Check the math operations work correctly', () => {
  it('addition', () => {
    const objArgOperation = { total: 40, next: 30, operation: '+' };
    const result = calculate(objArgOperation, objArgOperation.operation);
    expect(result.total).toBe('70');
  });

  it('substraction', () => {
    const objArgOperation = { total: 70, next: 20, operation: '-' };
    const result = calculate(objArgOperation, objArgOperation.operation);
    expect(result.total).toBe('50');
  });

  it('division', () => {
    const objArgOperation = { total: 50, next: 2, operation: '÷' };
    const result = calculate(objArgOperation, objArgOperation.operation);
    expect(result.total).toBe('25');
  });

  it('multiplication', () => {
    const objArgOperation = { total: 7, next: 2, operation: 'x' };
    const result = calculate(objArgOperation, objArgOperation.operation);
    expect(result.total).toBe('14');
  });
});
