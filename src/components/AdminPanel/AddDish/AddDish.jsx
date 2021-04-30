import React from 'react'
import './AddDish.css'

const AddDish = () => {

    const [dishType, setDishType] = React.useState("");
    const [dishName, setDishName] = React.useState("");
    const [dishIngri, setDishIngri] = React.useState("");
    const [smallPrice, setSmallPrice] = React.useState("");
    const [mediumPrice, setMediumPrice] = React.useState("");
    const [largePrice, setLargePrice] = React.useState("");



    const setType = (e) => {
        setDishType(e.target.value);
    }

    const setName = (e) => {
        setDishName(e.target.value);
    }

    const setIngri = (e) => {
        setDishIngri(e.target.value);
    }

    const setSmall = (e) => {
        setSmallPrice(e.target.value);
    }
    const setMedium = (e) => {
        setMediumPrice(e.target.value);
    }
    const setLarge = (e) => {
        setLargePrice(e.target.value);
    }

    const submit = (e)=>{

        e.preventDefault();
        console.log(dishType);
        console.log(dishName);
        console.log(dishIngri);
        console.log(smallPrice);
        console.log(mediumPrice);
        console.log(largePrice);

    }

    return (
        <div className="adminlogin_box">
            <form className="adminlogin_form" onSubmit={submit}>
                <h1>Add New Dish</h1>
                <div className="radio">
                    <label>
                        <span>
                            <input type="radio" name="radio" value="pizza" onClick={setType} />
                        </span>
                        <span>Pizza</span>
                    </label>
                    <label>
                        <span>
                            <input type="radio" name="radio" value="special-pizza" onClick={setType} />
                        </span>
                        <span>Special Pizza</span>
                    </label>
                    <label>
                        <span>
                            <input type="radio" name="radio" value="drink" onClick={setType} />
                        </span>
                        <span>Drink</span>
                    </label>

                </div>
                <div>
                    <div className="form-control">
                        <input id="name" type="text" required onChange={setName} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-control">
                        <input id="ingridiets" type="text" required onChange={setIngri} />
                        <label htmlFor="ingridients">Ingridients</label>
                    </div>
                </div>
                <div>

                    <div className="form-control">
                        <input id="small" type="number" required onChange={setSmall} />
                        <label htmlFor="ingridients">Price for Small</label>
                    </div>
                    <div className="form-control">
                        <input id="medium" type="number" required onChange={setMedium} />
                        <label htmlFor="ingridients">Price for Medium</label>
                    </div>
                    <div className="form-control">
                        <input id="large" type="number" required onChange={setLarge} />
                        <label htmlFor="ingridients">Price for Large</label>
                    </div>
                </div>
                <div className="form-control" style={{ textAlign: 'center' }}>
                    <button className="learn-more" type='submit'>
                        <span className="circle">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Add Table</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddDish
