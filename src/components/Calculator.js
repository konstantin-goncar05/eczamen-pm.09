import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="Calculator">
      <h1>Форма для ввода</h1>
      <input id='square' placeholder='Площадь (кв.м)' type='text' />
      <input id='number of flors' placeholder='Количество этажей' type='text' />
      <input id='foundation type' placeholder='Тип фундамента (Ленточный, плитный, столбчатый' type='text' />
      <input id='wall material' placeholder='Материал стен (Кирпич, дерево, газобетон)' type='text' />
      <input id='roof type' placeholder='Тип крыши (плоская, сжатная' type='text' />
      <button id='send' onClick={handleSubmin}>Расчитать стоимость</button>
      <button onClick={sendDataByEmail}>Отправить на почту</button> <br />
      <p id='addProductError'></p>
    </div>
  );
}

export default Calculator;
