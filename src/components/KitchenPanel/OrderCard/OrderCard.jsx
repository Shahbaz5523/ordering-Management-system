import React from "react";
import "./OrderCard.css";
export default function OrderCard() {
  let orderNmber=10;
  let arr=[{
    orderNmber:orderNmber,
    tableNumber:"1",
    items:[
      {
      itemName:"Behare Kabab",
      itemQty:"2",
      itemSize:"large"
    },
    {
      itemName:"Zinfger",
      itemQty:"2",
      itemSize:"large"
    },
    {
      itemName:"Coke",
      itemQty:"2",
      itemSize:"Regular"
    },
  ] 
  },{
    orderNmber:orderNmber,
    tableNumber:"1",
    items:[
      {
      itemName:"Behare Kabab",
      itemQty:"2",
      itemSize:"large"
    },
    {
      itemName:"Zinfger",
      itemQty:"2",
      itemSize:"large"
    },
    {
      itemName:"Coke",
      itemQty:"2",
      itemSize:"Regular"
    },
  ] 
  }
]
  return (
    <div className="orderContainer">
    {arr.map((item, index) => {
       orderNmber++
          return (
            <div className="card-main">
            <h2> <img src="./note.svg" alt="img"/> <span>Order {orderNmber}</span></h2>
            <h3><img src="./dinner.svg" alt="img"/> <span>Table # {item.tableNumber}</span></h3>
            <table>
              <tr className='table-head'>
                <td className="item-head">ITEMS</td>
                <td className="item-qty">QTY</td>
                <td className="item-size">SIZE</td>
              </tr>
            {item.items.map((a,index)=>{
              return( 
            
              <tr>
                <td><h4>{a.itemName}</h4></td>
                <td><h4>{a.itemQty}</h4></td>
                <td><h4>{a.itemSize}</h4></td>
              </tr>
            
            )
            })}
            </table>
            <button> <img src="./cooking.svg" alt="waiter"/> <span>Start</span></button>
            <button> <img src="./waiter.svg" alt="cooking"/> <span>Ready</span></button>
          </div>
          
          );
        })}
  
    </div>
  );
}

