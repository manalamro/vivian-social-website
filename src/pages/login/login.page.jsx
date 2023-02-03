import React ,{ useEffect ,useContext } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../components/providers/UserProvider.component'
import { TEMP_USERS } from '../../data/temp-data';

const Login = (props) => {
  const navigate = useNavigate();
  const {handleUserLogin, user}= useContext(UserContext);

  // useEffect for prevent you from go to login while you logged befor
  useEffect(()=>{
    if(user !== null){
    navigate('/feed');
    }
  },[user])

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //find function return one item.
    const user = TEMP_USERS.find((user) => user.email === email 
    && user.password === password);

    if (user) {
      handleUserLogin(user);
      navigate('/feed',{replace:true});
    } else {
      alert("I don't know you, Go Away");
    }
  }


  return (
    <div className="login">
      <h2>Welcome Back, Vivian Social Network</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="actions-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;