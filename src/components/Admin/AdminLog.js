import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';


const AdminLog = () => {

    const [usernameL, setUsername] = useState("");
    const [passwordL, setPassword] = useState("");
   
    const [loginStatus,setLoginStatus] = useState("");
  
    const history = useHistory();
  
    
  
    useEffect(()=>{
      setLoginStatus("")
    },[]);
  

  
    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: usernameL,
        password: passwordL
      }).then((response) => {
        
        if(response.data.message){
          setLoginStatus(response.data.message)
        }else{
          history.push("/allProducts");
        }
      });
    }
  
    
      return (
        <div className="App">
  
          <div className="form">
            <div>
              <h1>Admin Login</h1>
              <label>Username</label>
              <input type="text" name="UserName"  onChange={(e) => { setUsername(e.target.value); }}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="PassWord"  onChange={(e) => { setPassword(e.target.value); }} />
            </div>
            <button onClick={login}>Login</button>
          </div>
          
            
          <h1>{loginStatus}</h1>
        </div>
  
      );
    };
  
  
  
  
  
  export default AdminLog;