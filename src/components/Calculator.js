import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, updateObj] = useState({ total: 0, next: null, operation: null });
  const clickBtn = (e) => {
    updateObj(calculate(obj, e.target.id));
  };

  const { total, next, operation } = obj;
  return (
    <div className="calculator-Container ">
      <h1 className="letsDo">Let&apos;s Do Some Math</h1>
      <div className="app">
        <h2 className="defaultOutput box">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </h2>
        <button type="button" onClick={clickBtn} id="AC" className="box btn">
          AC
        </button>
        <button type="button" onClick={clickBtn} id="+/-" className="box btn">
          +/-
        </button>
        <button type="button" onClick={clickBtn} id="%" className="box btn">
          %
        </button>
        <button
          type="button"
          onClick={clickBtn}
          id="÷"
          className="box bg-orange btn"
        >
          ÷
        </button>
        <button type="button" onClick={clickBtn} id="7" className="box btn">
          7
        </button>
        <button type="button" onClick={clickBtn} id="8" className="box btn">
          8
        </button>
        <button type="button" onClick={clickBtn} id="9" className="box btn">
          9
        </button>
        <button
          type="button"
          onClick={clickBtn}
          id="x"
          className="box bg-orange bt"
        >
          x
        </button>
        <button type="button" onClick={clickBtn} id="4" className="box btn">
          4
        </button>
        <button type="button" onClick={clickBtn} id="5" className="box btn">
          5
        </button>
        <button type="button" onClick={clickBtn} id="6" className="box btn">
          6
        </button>
        <button
          type="button"
          onClick={clickBtn}
          id="-"
          className="box bg-orange btn"
        >
          -
        </button>
        <button type="button" onClick={clickBtn} id="1" className="box btn">
          1
        </button>
        <button type="button" onClick={clickBtn} id="2" className="box btn">
          2
        </button>
        <button type="button" onClick={clickBtn} id="3" className="box btn">
          3
        </button>
        <button
          type="button"
          onClick={clickBtn}
          id="+"
          className="box bg-orange btn"
        >
          +
        </button>
        <button
          type="button"
          onClick={clickBtn}
          id="0"
          className="box zero btn"
        >
          0
        </button>
        <button type="button" onClick={clickBtn} id="." className="box btn">
          .
        </button>
        <button
          type="button"
          onClick={clickBtn}
          id="="
          className="box bg-orange btn"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
