import { useNavigate } from 'react-router-dom';
import './chat.css';
import masseges from '../../assets/masseges.svg'

const Chat=()=>{
const navigate = useNavigate();

const navigateToFeed = () =>{
  navigate({pathname : "/feed" });
}

return(

<div>
<h1>your chat masseges</h1>
<p>Here you will see all your messages &nbsp;
<button onClick={navigateToFeed}>Go to Feed</button>
</p>
<img src={masseges} alt="chat" width={500}/>
</div>

)

};

export default Chat;