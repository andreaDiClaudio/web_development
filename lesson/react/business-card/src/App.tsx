import './App.css'
import PrimaryButton from './components/atoms/PrimaryButton'

function App() {
  return (
    <>
      <PrimaryButton onClick={() => console.log("Create New")} buttonText='Create New'/>
      <PrimaryButton onClick={() => console.log("Log In")} buttonText='Log in'/>
    </>
  )
}

export default App
