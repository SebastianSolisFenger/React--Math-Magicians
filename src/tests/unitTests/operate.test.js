import operate from '../../logic/operate';

describe('Testing Operate.js', () => {
  it('testing operate.js: plus', () => {
    const display = operate(2, 5, '+');
    expect(display).toBe('7');
  });

  it('testing operate.js: minus', () => {
    const display = operate(2, 5, '-');
    expect(display).toBe('-3');
  });

  it('testing operate.js: times', () => {
    const display = operate(2, 5, 'x');
    expect(display).toBe('10');
  });

  it('testing operate.js: div', () => {
    const display = operate(10, 5, '÷');
    expect(display).toBe('2');
  });

  it('testing operate.js: div for zero', () => {
    const display = operate(10, 0, '÷');
    expect(display).toBe("Can't divide by 0.");
  });

  it('testing operate.js: mod ', () => {
    const display = operate(10, 5, '%');
    expect(display).toBe('0');
  });

  it('testing operate.js: mod for zero', () => {
    const display = operate(10, 0, '%');
    expect(display).toBe("Can't find modulo as can't divide by 0.");
  });
});
