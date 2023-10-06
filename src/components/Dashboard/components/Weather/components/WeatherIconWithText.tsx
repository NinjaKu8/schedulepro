
type IconWithTextProps = {
  type: string;
  text: string | undefined;
}

export function WeatherIconWithText({ type, text }:IconWithTextProps ): JSX.Element {
  return (
    <div className='d-flex gap-2'>
      <i className={`wi wi-${type} fs-4`}></i>
      <div className='my-auto'>{text ? text : 'N/A'}</div>
    </div>
  )
}
