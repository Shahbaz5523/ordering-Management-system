import React ,{useState} from "react";

const Drink = () => {
  const [drink, setDrink] = useState({
     drinkName: '', priceForRegular: null, priceForHalf: null, priceForLiter: null
  })

  // const [dishType, setDishType] = useState('');

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;



    setDrink({ ...drink, [name]: value })


  }
  
  const addDrink = async (e) => {
    e.preventDefault();
    
    // console.log(drink);
    // console.log("hello");
    const { drinkName, priceForRegular, priceForHalf, priceForLiter  } = drink;
    console.log( drinkName, priceForRegular, priceForHalf, priceForLiter );
        const res = await fetch("/adddrink", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
              drinkName, 
              priceForRegular, 
              priceForHalf, 
              priceForLiter 

            })
        });

        const data = await res.json();
        console.log(data);
        if (data.error) {
            window.alert("invalid registration");
            console.log("invalid registration");

        } else {
            window.alert("registration sucessfull");
            console.log("registration sucess");
        }

  }
  return (
    <form method='POST' onSubmit={addDrink} className="formBody drinks">
      
      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input id="name" type="text" required name="drinkName"  onChange={handleInput}/>
          <label htmlFor="name">Name</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control">
          <input id="small" type="number" style={{ textAlign: 'center' }} name="priceForRegular" required  onChange={handleInput}/>
          <label htmlFor="small" style={{ textAlign: 'center' }}>Regular Price</label>
        </div>
        <div className="form-control">
          <input id="medium" style={{ textAlign: 'center' }} type="number" name="priceForHalf" required onChange={handleInput} />
          <label htmlFor="medium" style={{ textAlign: 'center' }}>Half Price</label>
        </div>
        <div className="form-control">
          <input id="large" style={{ textAlign: 'center' }} type="number" name="priceForLiter" required onChange={handleInput} />
          <label htmlFor="large" style={{ textAlign: 'center' }}>Liter Price</label>
        </div>
      </div>

      <div className="form-control" style={{ textAlign: 'center' }}>
        <button className="learn-more" type='submit'>
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Add Dish</span>
        </button>
      </div>

    </form>
  );
};

export default Drink;
