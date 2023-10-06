import { IWeatherDay } from 'hooks/useWeather'
import { WeatherSmall } from './index'

type WeatherRemainingProps = {
  days: IWeatherDay[] | undefined;
}

export function WeatherRemaining({ days }: WeatherRemainingProps): JSX.Element {
  return (
    <div className='d-flex gap-3 flex-wrap'>
      {days?.map((day: IWeatherDay)=> (
        day.isDaytime 
          ? <WeatherSmall key={day.number} day={day} />
          : null
      ))}
    </div>
  )
}
