import React from 'react'
import "./AddTables.css";

const AddTables = () => {

    const [tableNo, setTableNo] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [adminPassword, setAdminPassword] = React.useState("");



    const setTable = (e)=>{
        setTableNo(e.target.value)
    }
    const setPass = (e)=>{
        setPassword(e.target.value)
        
    }
    const setAdminPass = (e)=>{
        setAdminPassword(e.target.value)
        
    }


    const submit = (e)=>{
            e.preventDefault();
            console.log(tableNo);
            console.log(password);
            console.log(adminPassword);
    }
    
    return (


        <div className="adminlogin_box">
            <form className="adminlogin_form" onSubmit={submit} >
                <h1>Add New Table</h1>
                <div className="form-control">
                    <input id="name"  type="text" required onChange={setTable} />
                    <label htmlFor="name">Table No  </label>
                </div>
                <div className="form-control">
                    <input id="pass" type="password" required onChange={setPass} />
                    <label htmlFor="pass">Password</label>
                </div>
                <div className="form-control">
                    <input id="pass" type="password" required onChange={setAdminPass} />
                    <label htmlFor="pass">Admin Code</label>
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

export default AddTables
