import React from 'react'
import CelsciusInput from './CelsciusInput'
import FahrenheitInput from './FahrenheitInput'


const TempratureConverter = () => {
  // const [celsius, setCelsius] = React.useState('');
  // const [fahrenheit, setFahrenheit] = React.useState('');
  const [temperature, setTemperature] = React.useState({
    celsius: '',
    fahrenheit: ''
  })
  // handle celsius change
  const handleCelsiusChange = (value) => {
    const celsius = parseFloat(value)
    const fahrenheit = value !== '' && !Number.isNaN(celsius)
      ? (celsius * 9/5) + 32
      : ''
    setTemperature({
      celsius: value !== '' && !Number.isNaN(celsius) ? celsius : '',
      fahrenheit: fahrenheit.toFixed(2)
    })
  }

  // handle fahrenheit change
  const handleFahrenheitChange = (value) => {
    const fahrenheit = parseFloat(value)
    const celsius = value !== '' && !Number.isNaN(fahrenheit)
      ? (fahrenheit - 32) * 5/9
      : ''
    setTemperature({
      celsius: celsius.toFixed(2),
      fahrenheit: value !== '' && !Number.isNaN(fahrenheit) ? fahrenheit : ''
    })
  }

  return (
    <>
      <div className='max-w-sm mx-auto mt-10 p-4 border shadow-lg border-gray-300 rounded bg-white'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Temprature Converter</h1>
            <CelsciusInput celsius={temperature.celsius} onCelsiusChange={handleCelsiusChange} />
            <FahrenheitInput fahrenheit={temperature.fahrenheit} onFahrenheitChange={handleFahrenheitChange} />
      </div>
    </>
  )
}

export default TempratureConverter

