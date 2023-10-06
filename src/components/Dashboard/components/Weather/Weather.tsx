import Card from 'react-bootstrap/Card'
import { Trans, useTranslation } from 'react-i18next'

import { DashboardCardHeader } from 'common'
import { useWeather } from 'hooks'
import { WeatherLarge, WeatherRemaining } from './components'
import { WeatherPlaceholder } from './components/WeatherPlaceholder'

// TODO: WRITE BACKEND API CALL TO https://api.weather.gov/points/34.0916,-118.3705
// THIS WILL GET THE GRID COORDS BELOW. PUT THEM IN THE USER LOCATION OBJECT
const forecastGrid = 'LOX/150,46'

export function Weather(): JSX.Element {
  const [ todays, tomorrows, remainingDays, loading, error ] = useWeather({ forecastGrid })
  const { t } = useTranslation()
  return (
    <div>
      <DashboardCardHeader left={t('Weather')} right='West Hollywood, CA' />
      <Card className='shadow p-3'>
        {error
          ? <div>{error}</div>
          : loading
            ? <WeatherPlaceholder />
            : <div className='d-flex flex-column gap-3'>
                <WeatherLarge days={todays} />
                <WeatherLarge days={tomorrows} />
                <WeatherRemaining days={remainingDays} />
              </div>
        }
        <p className='text-muted small mt-3 mb-0 text-center'>
          <Trans i18nKey='weather-credit'>
            Data provided by the <a href='https://weather.gov'>US National Weather Service</a> and <a href='https://sunrise-sunset.org/'>Sunrise-Sunset.org</a>
          </Trans>
        </p>
      </Card> 
    </div>
  )
}
