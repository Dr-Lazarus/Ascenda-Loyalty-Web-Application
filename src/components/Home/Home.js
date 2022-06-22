import "./Home.css";
import React,{useState} from "react";
import DatePicker from "react-datepicker"

function Home(){
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
    return (
      <div className="home">
        <h1>Travel AnyWhere!</h1>
        <div className="search">
          <form className="search-form">
            <input className="search-destination" type='text'/>
            <DatePicker selected={startDate} onChange={onChange} 
            startDate={startDate} endDate={endDate} selectsRange inline />

            <label for= "number-of-rooms">Number of rooms:</label>
            <select className= "number-of-rooms" id="number-of-rooms">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
        </div>
        <img className= "deez" alt="" src="https://yt3.ggpht.com/l79cKyw3U8UsZJkdwTkvGoKI_pKu-63-s9eHuuTDM1zyy9ywYSMdJ4BjnozwovFSifX1uto9=s900-c-k-c0x00ffffff-no-rj"/>
      </div>
    );
  };
  
  export default Home;
  