import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { checkboxClasses } from '@mui/material';
import Home from './Home';
import './Login.css';

function Login({store}) {

const [login, setLogin] = useState(null);
const [un,setUn] = useState(null);
const [pw,setPw] = useState(null);
function handleForm(event) {
event.preventDefault();
const data = new FormData (event.currentTarget);
setUn ( data.get("un"));
setPw ( data.get("pw"));
axios.get('http://localhost:8085/check',{params:{
un: data.get("un"),
pw: data.get("pw")
}})
.then((res)=>{
console.log(res.data)
setLogin(res.data)
})
}

if(login === null || login === 'FAIL')
{
return (
<div className="App-login">
<p>Login goes here</p>
<form onSubmit={handleForm}>
<label htmlFor="un">Email:</label>
<input type="text" placeholder='Enter Email' name="un" id="un"/>
<br/>
<label htmlFor="pw">Password:</label>
<input type="password" placeholder='Enter Password' name="pw" id="pw"/>
<br/><br/>
<input type="submit" value="Login"/>
</form>
</div>
);

}
else{
return(
<div>
<Home un={un} pw={pw} store={store}/>
</div>
);
}

}

export default Login;




