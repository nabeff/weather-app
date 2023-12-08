import { BsSunrise, BsSunset} from "react-icons/bs"
import { GiWindSlap, GiCompass } from "react-icons/gi";
import {WiHumidity} from "react-icons/wi";
import {MdAir} from "react-icons/md"
import { CiTempHigh} from "react-icons/ci"
import { FaEye} from "react-icons/fa"

function WeatherDetail({ data }) {
  return (
    <div className='p-10'>
      <h1 className='mb-4 text-2xl text-white'>Weather details</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[60rem]'>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white  '> 
        <div className='text-2xl'>
          <h3>Wind Speed</h3>
          <h3>{data.current.wind_mph} mph</h3>
        </div>
        <div>
          <GiWindSlap fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Humidity</h3>
          <h3>{data.current.humidity}%</h3>
        </div>
        <div>
          <WiHumidity fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Sunrise</h3>
          <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
        </div>
        <div>
          <BsSunrise fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Sunset</h3>
          <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
        </div>
        <div>
          <BsSunset fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Wind Speed</h3>
          <h3>{data.current.wind_dir}</h3>
        </div>
        <div>
          <GiCompass fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Air Pressure</h3>
          <h3>{data.current.pressure_mb} hPa</h3>
        </div>
        <div>
          <MdAir fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Feel Like</h3>
          <h3>{data.current.feelslike_f}</h3>
        </div>
        <div>
          <GiWindSlap fontSize={40}/>
        </div>
        </div>
        <div className='bg-gradient-to-tr from-blue-700 to-purple-500 flex p-4 
        items-center justify-center gap-6 rounded-xl text-white '> 
        <div className='text-2xl'>
          <h3>Visibility</h3>
          <h3>{data.current.vis_km} km</h3>
        </div>
        <div>
          <FaEye fontSize={40}/>
        </div>
        </div>
      </div>

    </div>
  )
}

export default WeatherDetail