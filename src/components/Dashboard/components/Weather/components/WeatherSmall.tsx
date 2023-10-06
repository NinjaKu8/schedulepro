import format from 'date-fns/format'

import { IWeatherDay } from 'hooks/useWeather'
import { WeatherCard } from './WeatherCard'

type WeatherSmallProps = {
  day: IWeatherDay;
}

export function WeatherSmall({ day }: WeatherSmallProps): JSX.Element {
  return (
    <WeatherCard>
      <div className='d-flex flex-column gap-2 p-2 bg-info-25 align-self-stretch align-items-center flex-fill'>
        <div className='mb-2 text-center'>{format(new Date(day?.startTime),'EEE M/d')}</div>
        <div>{day?.icon ? <i className={`wi wi-${day.icon} fs-2`}></i> : <>N/A</>}</div>
        <div>{day?.farenheit}</div>
      </div>
    </WeatherCard>
  )
}
