import { useEffect, useState } from 'react'
import isSameDay from 'date-fns/isSameDay'
import addDays from 'date-fns/addDays'
import isAfter from 'date-fns/isAfter'

import { useAPI } from './index'
import { weatherConditions, weatherModifiers } from 'globals/weatherConditions'

type QuantitativeValue = {
  unitCode: string;
  value: string | number;
}
type TemperatureValue = {
  unitCode: string;
  value: number;
}
interface IPeriod {
  detailedForecast: string;
  endTime: string;
  icon: string | null;
  isDaytime: boolean;
  name: string;
  number: number;
  shortForecast: string;
  startTime: string;
  temperature: TemperatureValue;
  temperatureTrend: string | null;
  windDirection: string;
  windSpeed: string;
}
type Properties = {
  elevation: QuantitativeValue;
  forecastGenerator: string;
  generatedAt: string;
  periods: IPeriod[];
  units: string;
  updated: string;
  updateTime: string;
  validTimes: string;
}
type NWSResponse = {
  '@context': any;
  geometry: any;
  properties: Properties;
  type: string;
}

export interface IWeatherDay extends IPeriod {
  celsius: string;
  farenheit: string;
}

type Props = {
  forecastGrid: string;
}
type Response = [
  (IWeatherDay[] | undefined), 
  (IWeatherDay[] | undefined), 
  (IWeatherDay[] | undefined), 
  boolean,
  string | undefined
]

const init: RequestInit = {
  headers: {
    'User-Agent': '(thinkcrew.com, info@thinkcrew.com)',
    'accept': 'application/geo+json',
    'Feature-Flags': 'forecast_temperature_qv',
  }
}

export function useWeather({ forecastGrid }: Props): Response {
  const [ todays, setTodays ] = useState<IWeatherDay[]>()
  const [ tomorrows, setTomorrows ] = useState<IWeatherDay[]>()
  const [ remainingDays, setRemainingDays ] = useState<IWeatherDay[]>()

  const url = `https://api.weather.gov/gridpoints/${forecastGrid}/forecast?units=us`
  const [ data, loading, error ] = useAPI<NWSResponse>(url, init)

  useEffect(()=>{
    async function handleResults() {      
      if(data) {
        const properties: Properties = data?.properties
        if(properties) {
          const days: IWeatherDay[] = data.properties.periods.map((period: IPeriod)=>({
            ...period,
            celsius: `${Math.floor(period.temperature.value)}°C`,
            farenheit: `${Math.floor(period.temperature.value * (9 / 5) + 32)}°F`,
            icon: getWeatherIcon(period.shortForecast, period.isDaytime)
          }))
          if(days) {
            const todays = days.filter((day: IWeatherDay)=>isSameDay(new Date(day.startTime), new Date()))
            const tomorrows = days.filter((day: IWeatherDay)=>isSameDay(new Date(day.startTime),addDays(new Date(), 1)))
            const remainingDays = days.filter((day: IWeatherDay)=>isAfter(new Date(day.startTime.slice(0,10)),new Date()))
            if(todays) setTodays(todays)
            if(tomorrows) setTomorrows(tomorrows)
            if(remainingDays) setRemainingDays(remainingDays)
          }
        }
      }
    }
    handleResults()
  },[data])

  return [ todays, tomorrows, remainingDays, loading, error ] 
}

function getWeatherIcon(shortForecast: string, isDaytime: boolean): string | null {
  let condition = weatherConditions[shortForecast.toLowerCase()] // try to get the condition obj, hoping the forecast description has a exact match
  if(condition) { 
    return isDaytime ? condition.day : condition.night
  } else { // if no direct match
    const shortForecastArray = shortForecast.split(' ') // split the forecast into array of words
    if(shortForecastArray.length) {
      // remove all modifier words
      const keywords = shortForecastArray.filter((word:string)=>!weatherModifiers.includes(word.toLowerCase()))
      for(let keyword of keywords) { // find the first match in the remaining words
        condition = weatherConditions[keyword.toLowerCase()]
        if(condition) break
      }
      if(condition) return isDaytime ? condition.day : condition.night // if there's now a match, return it
    }
  }
  return null // there was no match
}