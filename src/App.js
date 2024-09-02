import './App.css';
import { CiHome } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoIosTrendingDown } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";


function Icon(props){
  return(
    <div className='icon'>
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  )
}

const arr = [];
for(let i = 0; i < 20; i++){
  arr.push(i);
}
console.log(arr);

function VideoCard(props){
  return(
    <div className='videoCard'>
      <div><img className="thumbnail" src={'https://placehold.co/250x150'}/></div>
      <div>{'Title' + props.number}</div>
      <div>{"Channel" + props.number}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Icon icon={<CiHome size={40}/>} label={'Home'}/>
        <Icon icon={<IoIosTrendingDown size={40}/>} label={'Trending'}/>
        <Icon icon={<MdOutlineSubscriptions size={40}/>} label={'Subscriptions'}/>
        <Icon icon={<FaHistory size={40}/>} label={'History'}/>
        <Icon icon={<PiDownloadSimpleBold size={40}/>} label={'Download'}/>
      </div>
      <div className="rightside">
        <div className='header'>
          <div className='youtube'><CiYoutube size={60}/><h1>YOUTUBE</h1></div>
          <div className='search'><input className='searchBar' placeholder='search' /></div>
        </div>
        <div className='videoGrid'>
          {
            arr.map((obj) => {
              return <VideoCard number={obj}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
