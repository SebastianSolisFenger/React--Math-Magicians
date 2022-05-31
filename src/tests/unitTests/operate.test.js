import operate from '../../logic/operate';

describe("Testing Operate.js", ()=>{
    it('testing operate.js: plus', () => {
      let display=operate(2,5,"+")
      expect(display).toBe("7")
    });
    
    it('testing operate.js: minus', () => {
      let display=operate(2,5,"-")
      expect(display).toBe("-3")
    });
    
    it('testing operate.js: times', () => {
      let display=operate(2,5,"x")
      expect(display).toBe("10")
    });

    it('testing operate.js: div', () => {
      let display=operate(10,5,"÷")
      expect(display).toBe("2")
    });

    it('testing operate.js: div for zero', () => {
      let display=operate(10,0,"÷")
      expect(display).toBe("Can't divide by 0.")
    });

    it('testing operate.js: mod ', () => {
        let display=operate(10,5,"%")
        expect(display).toBe("0")
      });

    it('testing operate.js: mod for zero', () => {
        let display=operate(10,0,"%")
        expect(display).toBe("Can't find modulo as can't divide by 0.")
      });
    })
    