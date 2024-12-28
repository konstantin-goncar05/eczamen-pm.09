import React from 'react' 
import './Header.css';

function Header() {
    return (
      <div className="Header">
        
       <ul>
         <Header />
         <li onClick={changePageUno}> Главная</li>
         <li onClick={changePageUno}> Калькулятор стоимости</li>
       </ul>

      </div>
    );
  }
  
  export default Header;