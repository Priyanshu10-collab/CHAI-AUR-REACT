import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'


function MyApp(){
  return (
    <>
    <h1>Custom App</h1>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>,
)
