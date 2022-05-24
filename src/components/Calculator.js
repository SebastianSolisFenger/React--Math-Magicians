import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn(e) {
    this.setState((state) => calculate(state, e.target.id));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-Container">
        <h2 className="defaultOutput box">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </h2>
        <button
          type="button"
          onClick={this.clickBtn}
          id="AC"
          className="box bt"
        >
          AC
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="+/-"
          className="box bt"
        >
          +/-
        </button>
        <button type="button" onClick={this.clickBtn} id="%" className="box bt">
          %
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="÷"
          className="box bg-orange bt"
        >
          ÷
        </button>
        <button type="button" onClick={this.clickBtn} id="7" className="box bt">
          7
        </button>
        <button type="button" onClick={this.clickBtn} id="8" className="box bt">
          8
        </button>
        <button type="button" onClick={this.clickBtn} id="9" className="box bt">
          9
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="x"
          className="box bg-orange bt"
        >
          x
        </button>
        <button type="button" onClick={this.clickBtn} id="4" className="box bt">
          4
        </button>
        <button type="button" onClick={this.clickBtn} id="5" className="box bt">
          5
        </button>
        <button type="button" onClick={this.clickBtn} id="6" className="box bt">
          6
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="-"
          className="box bg-orange bt"
        >
          -
        </button>
        <button type="button" onClick={this.clickBtn} id="1" className="box bt">
          1
        </button>
        <button type="button" onClick={this.clickBtn} id="2" className="box bt">
          2
        </button>
        <button type="button" onClick={this.clickBtn} id="3" className="box bt">
          3
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="+"
          className="box bg-orange bt"
        >
          +
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="0"
          className="box zero bt"
        >
          0
        </button>
        <button type="button" onClick={this.clickBtn} id="." className="box bt">
          .
        </button>
        <button
          type="button"
          onClick={this.clickBtn}
          id="="
          className="box bg-orange bt"
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
