import classnames from 'classnames';

import { IWeatherDay } from 'hooks/useWeather'
import { WeatherCard, WeatherIconWithText, WeatherSunriseSunset } from './index';

type WeatherLargeProps = {
  days: IWeatherDay[] | undefined;
}

export function WeatherLarge({ days }: WeatherLargeProps): JSX.Element {
  
  return (
    <WeatherCard className='weather-large'>
      <div className='weather-large__body'>
        {days?.map((day: IWeatherDay)=>(
          <div 
            className={classnames('weather-large__section d-flex flex-column gap-3 p-3 align-items-center', {
              'bg-info-25': day.isDaytime,
              'bg-dark text-light': !day.isDaytime,
            })} 
            key={day.number}
          >
            <div className='d-flex flex-column w-100'>
              <div>
                <div className='weather-large__name-narrow text-center w-100'><h6 className='mb-0'>{day.name}</h6></div>
              </div>
              <div className='weather-large__top d-flex w-100 align-items-center justify-content-around' style={{ minHeight: '5em'}}>
                <div className='weather-large__name-wide text-center'><h6>{day.name}</h6></div>
                <div className='text-center'>{day.icon ? <i className={`wi wi-${day.icon} display-4`}></i> : <>N/A</>}</div>
                <div className='text-center'><h4>{day.farenheit}</h4></div>
              </div>
            </div>
            <div className='flex-grow-1 small'>
              {day.temperatureTrend && <div>{day.temperatureTrend}</div>}
              <div>{day.detailedForecast}</div>
              </div>
            <div className='d-flex justify-content-between w-100 flex-shrink-0 small'>
              <WeatherIconWithText type='strong-wind' text={`${day.windSpeed} ${day.windDirection}`} />
              <WeatherSunriseSunset isDaytime={day.isDaytime} date={new Date(day.startTime)} />
            </div>
          </div>
        ))}
      </div>
    </WeatherCard>
  )
}
