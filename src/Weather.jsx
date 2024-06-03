import React, { useState } from 'react';
import style from "./Weather.module.css";
import axios from "axios";


function Weather() {
  
  const [location,setLocation] = useState("");
  const [request,setRequest] = useState({});
  // console.log(location);


  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f15ee6fcc25f790861f8dbee89dbe6ca&units=metric`;

  const setWeather = () =>{
    axios.get(Url).then((response) =>{
      setRequest(response.data);
      console.log(response.data);
    });

  }
  return (
   <>

   <div className={style.main}>
   <input type='text' className={style.userInput}  placeholder='Enter the city Name' value={location}
   onChange={(e) => setLocation(e.target.value)}/>

   <button className={style.button_search}
   onClick={setWeather}>Search</button>

  
   <h1 className= {style.city}>{request.name}</h1>

   <h2 className={style.city}>
     Temp{ request.main  ? <span>{request.main.temp}</span> :null}C
     </h2>


  <h2 className={style.city}>{" "}
     Wind{ request.main  ? <span>{request.wind.speed}</span> :null}Km/h
     </h2>

     </div>
   
   
   
   </>
  )
}

export default Weather;
