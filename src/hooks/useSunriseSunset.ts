import { useEffect, useState } from 'react'
import format from 'date-fns/format'

import { useAPI } from './index'

export interface ISunriseSunset {
  sunrise: string;
  sunset: string;
  solar_noon: string;
  day_length: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
}
type ISunriseSunsetResponse = {
  results: ISunriseSunset;
  status: string;
}

type Props = {
  date?: Date;
  latitude: number;
  longitude: number;
}

export function useSunriseSunset({ latitude, longitude, date }: Props): ISunriseSunset | undefined {
  const [ sunriseSunsetObject, setSunriseSunsetObject ] = useState<ISunriseSunset>()

  const formattedDate = date ? format(date, 'yyyy-MM-dd') : 'today'
  const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${formattedDate}&formatted=0`
  const [ data ] = useAPI<ISunriseSunsetResponse>(url)

  useEffect(()=>{
    async function handleResults() {      
      if(data) {
        const results: ISunriseSunset = data.results
        let k: keyof ISunriseSunset;
        for (k in results) {  
          results[k] = format(new Date(results[k]),'h:mmaa') // adjust for UTC offset
        }
        setSunriseSunsetObject(data.results)
      }
    }
    handleResults()
  },[data])

  return sunriseSunsetObject
}
