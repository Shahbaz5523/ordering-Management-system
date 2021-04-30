import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  // define state for usermame
  const [userName , setUserName] = React.useState("");
  // define state for password
  const [userPassword , setUserPassword] = React.useState("");
  // define navigate hook for going to nexr page when user logined 
  const navigate  = useNavigate();

  // set username on change event
  const setName = (e) =>{
    setUserName(e.target.value);
  }
  // set userpassword on change event
  const setPassword = (e) =>{
    setUserPassword(e.target.value);
  }

  const userAuth = (e) =>{
    e.preventDefault();
    if(userName === "table1" && userPassword === "123"){
      // here i user navigate to redirect to /userpanel route and pass a state to show logined username in userpanel component
      navigate('/userpanel',{state : userName});
    }
    else if(userName === "cheif" && userPassword === "456"){
      navigate('/CheifPanel',{state:userName});
    }
    else if(userName === "admin" && userPassword === "789"){
      navigate('/admin',{state:userName});
    }
  }

  return (
    <div className="login_box">
      <form className="login_form" onSubmit={userAuth}>
        <h1>Welcome</h1>
        <div className="form-control">
          <input id="name" value={userName} type="text" required  onChange={setName}/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-control">
          <input id="pass" value={userPassword} type="password" required  onChange={setPassword} />
          <label htmlFor="pass">Password</label>
        </div>
        <div className="form-control" style={{textAlign:'center'}}>
          <button className="learn-more" type='submit'>
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Login Now</span>
          </button>
        </div>
      </form>
    </div>
  );
}
