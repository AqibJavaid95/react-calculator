import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const add = container.getByTestId('operator-add');
    fireEvent.click(add);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');

  })

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divide = container.getByTestId('operator-divide');
    fireEvent.click(divide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('123');
  })

  it('should chain multiple operations together', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const add = container.getByTestId('operator-add');
    fireEvent.click(add);
    const button6 = container.getByTestId('number6');
    fireEvent.click(button6);
    const divide = container.getByTestId('operator-divide');
    fireEvent.click(divide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('7');

  })

  it('should clear the running total without affecting the calculation', () => {
    const button9 = container.getByTestId('number9');
    fireEvent.click(button9);
    const button0 = container.getByTestId('number0');
    fireEvent.click(button0);
    fireEvent.click(button0);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    fireEvent.click(button0);
    fireEvent.click(button0);
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    const add = container.getByTestId('operator-add');
    fireEvent.click(add);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('901');

  })
})

