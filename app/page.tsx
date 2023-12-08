"use client";


import React, { useState } from "react";
import Input from "./components/Input";
import { Content } from "next/font/google";
import WeekForecast from "./components/WeekForecast";
import Current from "./components/Current";
import WeatherDetail from "./components/WeatherDetail";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url = `http://api.weatherapi.com/v1/forecast.json?key=5ac1376674fe4f3d95b01455230812&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLElement>) => {
    if(e.key === "Enter"){
      e.preventDefault()
      try {
        const response = await fetch(url)
        if(!response.ok){
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")

      }catch(error){
        setError("City not found")
        setData({})
      }
    }
  }
  let content;
  if (Object.keys(data).length === 0 && error === '')
  {
    content = (
      <div>
        <h2>Welcome to the Weather App</h2>
      </div>
    )
  } else if (error !== ""){
    content = (
      <div>
        <p>City not found</p>
        <p>Enter a Valid city</p>
      </div>
    )
  } else {
    content = (
      <>
      <div>
        <Current data={data}/>
        <WeekForecast data={data}/>
      </div>
      <div> 
        <WeatherDetail/>
      </div>
      </>

    )
  }

  return (
    <div className="bg-cover bg-gradient-to-t from-blue-900 to-purple-500 h-screen">
      <div className="bg-purple/25 w-full flex flex-col h-fit">
      <div className="flex flex-col md:flex-row justify-between items-center p-14">
        <Input handleSearch={handleSearch} setLocation={setLocation}/>
        <h1 className="mb-8 md:mb-0 order-1 text-white 
        py-2 px-4 rounded-xl italic font-bold">Weather App</h1>
      </div>
      {content}
    </div>
    </div>
  )
}

export default Home