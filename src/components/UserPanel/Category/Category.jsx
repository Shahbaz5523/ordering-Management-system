import "./Category.css";
import React, { useState, useContext, useEffect } from "react";
import CategoryContex from "../../Context/CategoryContex";
import CheckCartContext from '../../Context/CheckCartContext';
import cartContext from '../../Context/cartContext';

export default function Category() {

  let classNames = ['categoryContainer'];
  
// code tofix the menu bar
  useEffect(() => {
    const header = document.getElementById("menu");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        
      } else {
        header.classList.remove("sticky");
        
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  

  // code  to set Category in state
  const [category, setCategory] = useState("all");

  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  // use context here to set data
  const context = useContext(CategoryContex);
  context[1](category);

  // use checkcartcontext here to set cartdata to show and hide
  const checkCart = useContext(CheckCartContext);

  // use cartcontext here to show numbers of items that are in the cart
  const cartItems = useContext(cartContext);


  // show cart when click on the cart button
  const showCart = ()=>{
    checkCart[1]({checkCart:true});
  }

  return (
    <div className={classNames.join(' ')} id="menu">
      <h2> <img src="menu (1).svg" alt="menu"/>Menu</h2>
      <div style={{ display: "flex" }}>
        <select onChange={getCategory} value={category}>
          <option value="all">All Foods</option>
          <option value="Pizza">Pizza</option>
          <option value="Special">Special Pizza</option>
          <option value="Drinks">Drinks</option>
        </select>
        <div className="cartContainer" onClick={showCart}>
          <img src="addToCart.svg" alt="cart" />
          <p className="countItems">{cartItems[0].length}</p>
        </div>
      </div>
    </div>
  );
}
