import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-Container">
        <span className="defaultOutput box">0</span>
        <button type="button" className="box bt">
          AC
        </button>
        <button type="button" className="box bt">
          +/-
        </button>
        <button type="button" className="box bt">
          %
        </button>
        <button type="button" className="box bg-orange bt">
          +
        </button>
        <button type="button" className="box bt">
          7
        </button>
        <button type="button" className="box bt">
          8
        </button>
        <button type="button" className="box bt">
          9
        </button>
        <button type="button" className="box bg-orange bt">
          X
        </button>
        <button type="button" className="box bt">
          4
        </button>
        <button type="button" className="box bt">
          5
        </button>
        <button type="button" className="box bt">
          6
        </button>
        <button type="button" className="box bg-orange bt">
          -
        </button>
        <button type="button" className="box bt">
          1
        </button>
        <button type="button" className="box bt">
          2
        </button>
        <button type="button" className="box bt">
          3
        </button>
        <button type="button" className="box bg-orange bt">
          +
        </button>
        <button type="button" className="box zero bt">
          0
        </button>
        <button type="button" className="box bt">
          .
        </button>
        <button type="button" className="box bg-orange bt">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
