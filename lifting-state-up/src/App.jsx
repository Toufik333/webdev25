
import './App.css'
import TempratureConverter from './components/TempratureConverter'
import CelsciusInput from './components/CelsciusInput'
import FahrenheitInput from './components/FahrenheitInput'

function App() {
 

  return (
    <div className='h-screen flex items-center justify-center bg-blue-500'>
      
      <TempratureConverter />

    </div>
  )
}

export default App
