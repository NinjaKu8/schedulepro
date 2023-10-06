import { useSunriseSunset } from 'hooks'
import { WeatherIconWithText } from "./index"

type Props = {
  date?: Date;
  isDaytime: boolean;
}

export function WeatherSunriseSunset({ date, isDaytime }: Props): JSX.Element {
  const sunriseSunsetObject = useSunriseSunset({ latitude: 34.0900, longitude: -118.3617, date })
  return (
    isDaytime
      ? <WeatherIconWithText type='sunrise' text={sunriseSunsetObject?.sunrise} />
      : <WeatherIconWithText type='sunset' text={sunriseSunsetObject?.sunset} />
  )
}
