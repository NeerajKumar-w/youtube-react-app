import './App.css';
import { CiHome } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

function Icon(props){
  return(
    <div className='icon'>
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Icon icon={<CiHome size={40}/>} label={'Home'}/>
      </div>
      <div className="rightside">
        <div className='header'>
          <div className='youtube'><CiYoutube size={60}/><h1>YOUTUBE</h1></div>
          <div className='search'><input placeholder='search' /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
