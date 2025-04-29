import { useState } from "react";
import Nav from './Nav'


const BurgerMenu = ({language, setPage, setCount}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burgerMenu">
      <button 
        className={`burgerIcon ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <Nav className={`menu ${isOpen ? "show" : ""}`} language={language} setPage={setPage} setCount={setCount}/>
    </div>
  );
};

export default BurgerMenu;
